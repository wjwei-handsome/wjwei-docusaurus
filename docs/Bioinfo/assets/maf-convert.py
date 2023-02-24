#!/usr/bin/env python3
# -*- encoding: utf-8 -*-
'''
@文件        :maf-convert.py
@说明        :Convrt FUCKING maf to other fmts
@时间        :2022/11/11 17:04:28
@作者        :wjwei
@版本        :0.01
@邮箱        :wjwei9908@gmail.com
'''


from collections import defaultdict
from dataclasses import dataclass
import gzip
import logging
import math
from itertools import groupby
import argparse
import re

from rich.progress import track


from rich.console import Console
from rich.logging import RichHandler

console = Console()
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S',
                    handlers=[RichHandler(rich_tracebacks=True,
                                          console=Console(stderr=True))])


def get_args():
    # define arguments
    parser = argparse.ArgumentParser(
        description=__doc__, prog='maf-convert.py',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)

    # required arguments
    required_parser = parser.add_argument_group('required arguments')
    required_parser.add_argument('-m', '--maf', action='store',
                                 type=str, dest='maf',required=True,
                                 help='maf path')
    required_parser.add_argument('-o', '--out', action='store', dest='out', type=str, required=True,
                                 help='output prefix')


    # options arguments
    optional_parser = parser.add_argument_group('optional arguments')
    optional_parser.add_argument('-p','--prefix', nargs='+', dest='prefix', help='prefix of maf file, a list, exp: Zm-B73v5 Zx-TEO09', default=None)




    return parser.parse_args(), parser.prog

def mapqFromProb(probString):
    mapqMaximum = 100
    try:
        p = float(probString)
    except ValueError:
        raise Exception("bad probability: " + probString)
    if p < 0 or p > 1:
        raise Exception("bad probability: " + probString)
    if p == 0:
        return mapqMaximum
    phred = -10 * math.log(p, 10)
    if phred >= mapqMaximum:
        return str(mapqMaximum)
    return str(int(round(phred)))


def cigarCategory(alignmentColumn):
    x, y = alignmentColumn
    if x == "-":
        if y == "-":
            return "P"
        else:
            return "I"
    else:
        if y == "-":
            return "D"
        # elif x != y:
        #     return "M" ## X-->M
        else:
            return "M"


def cigarParts(beg, alignmentColumns, end):
    if beg:
        yield str(beg) + "H"
    # (doesn't handle translated alignments)
    for k, v in groupby(alignmentColumns, cigarCategory):
        yield str(sum(1 for _ in v)) + k
    if end:
        yield str(end) + "H"


def get_cigar(m1, m2):
    qRevStart = m2.sequence_size - m2.alignment_start - m2.alignment_size
    cigar = "".join(cigarParts(m2.alignment_start, zip(m1.alignment, m2.alignment), qRevStart))
    return cigar

class MAFLine:
    """A reader for :term:`MAF` format.

    mode refname start algsize strand refsize alignment

    ::

        a
        s ref    100 10 + 100000 ---AGC-CAT-CATT
        s contig 0   10 + 10     ---AGC-CAT-CATT

        a
        s ref    100 12 + 100000 ---AGC-CAT-CATTTT
        s contig 0   12 + 12     ---AGC-CAT-CATTTT

    The alignments are stored by pair, one item for the reference, one for the
    query. The query (second line) starts at zero.

    """

    def __init__(self, line, prefix=""):
        self._items = line.split()
        self.prefix = prefix
        assert self._items[0] in "aspq", self._items

    @property
    def name(self):
        if self.prefix:
            return self.prefix+'.'+self._items[1]
        return self._items[1]

    @property
    def sequence_size(self):
        return int(self._items[5])

    @property
    def mode(self):
        return self._items[0]

    @property
    def strand(self):
        return self._items[4]

    @property
    def alignment_start(self):  # alignment start
        return int(self._items[2])

    @property
    def alignment_size(self):
        return int(self._items[3])

    @property
    def alignment(self):
        return self._items[6]

    def get_alignment_length(self):
        return len(self._items[6].replace("-", ""))

@dataclass
class Header:
    pg: str  ## program
    vn: str  ## version
    cl: str  ## command line


@dataclass
class Prefix:
    ref_pre: str  ## reference prefix
    query_pre: str  ## query prefix

class MAF:
    """A reader for :term:`MAF` format."""

    def __init__(self, filename, header: Header, prefix: Prefix, outfile=None, ):
        self.filename = filename
        self.outfile = outfile
        self.header = header
        self.prefix = prefix

    def count_insertions(self, alnString):
        """return length without insertion, forward and reverse shift"""
        gaps = alnString.count("-")
        forwardFrameshifts = alnString.count("\\")
        reverseFrameshifts = alnString.count("/")
        letters = len(alnString) - gaps - forwardFrameshifts - reverseFrameshifts
        return letters, forwardFrameshifts, reverseFrameshifts

    #    @SQ SN:NC_002929    LN:4086189
    #    @PG ID:bioconvert VN:?? CL:bioconvert input.maf output.sam


    def to_sam(self):
        # identifier flag ref start qual cigar * 0 0 sequence_ref qual NM: MD:
        # AS XS RG ....

        fout = open(self.outfile, "w")
        fout.write("@HD\tVN:1.3\tSO:unsorted\n")

        msg = "maf2paf found q starting a new line."

        with console.status("[bold green]Writing Header for sam...") as status:
            with open(self.filename, "r") as fin:
                # scan once to get sequence name and length.
                # only reference is of interest
                names = set()
                top = True
                fin_total = 0
                for line in fin:

                    fin_total += 1

                    if len(line.strip()) == 0 or line.startswith("#"):
                        top = True
                        continue

                    m = MAFLine(line) if not self.prefix.ref_pre else MAFLine(line, self.prefix.ref_pre)
                    if m.mode == "s" and top is True:
                        if m.name not in names:
                            names.add(m.name)
                            fout.write(f"@SQ\tSN:{m.name}\tLN:{m.sequence_size}\n")
                        top = False

            fout.write(
                "@PG\tID:{0}\tPN:{0}\tVN:{1}\tCL:{2} \n".format(self.header.pg, self.header.vn, self.header.cl)
            )

        with open(self.filename, "r") as fin:
            for line in track(fin, description="[bold green]Converting maf to sam...", total=fin_total):
                # skipping empty lines
                if line.strip() == "" or line.startswith("#"):
                    continue

                if line[0] == "a":
                    s = []
                    if "=" in line:
                        tags = dict(i.split("=") for i in line[1].split())
                    else:
                        tags = {}
                elif line[0] == "s":
                    s.append(line)
                elif line[0] == "q":
                    # quality ?
                    raise NotImplementedError(msg)
                elif line[0] == "p":
                    raise NotImplementedError(msg)
                elif line[0] == "#":
                    logging.warning(line)

                # now that we have the two lines, save into SAM file
                if len(s) > 2:
                    raise NotImplementedError("mutliple alignment not implemented yet")

                if len(s) == 2:
                    ref = MAFLine(s[0]) if not self.prefix.ref_pre else MAFLine(s[0], self.prefix.ref_pre)
                    query = MAFLine(s[1]) if not self.prefix.query_pre else MAFLine(s[1], self.prefix.query_pre)

                    if ref.strand != "+":
                        raise Exception("for SAM, the 1st strand in each alignment must be +")

                    flag = self.get_flag(ref.alignment, query.strand)

                    # This is the slowest part of the code
                    cigar = get_cigar(ref, query)

                    qual = "*"

                    if "mismap" in tags:
                        mapq = tags["mismap"]
                    else:
                        mapq = "255"  # missing  254 is maximum

                    pos = int(ref.alignment_start) + 1  # convert to 1-based coordinate
                    data = [
                        query.name,
                        flag,
                        ref.name,
                        pos,
                        mapq,
                        cigar,
                        "*",
                        0,
                        0,
                        query.alignment.replace("-", "").upper(),
                        qual,
                    ]
                    # MD
                    # XS
                    # RG:Z:1
                    if "score" in tags:
                        data.append("AS:i:{}".format(tags["score"]))

                    if "expect" in tags:
                        data.append("EZ:Z:{}".format(tags["expect"]))

                    # try: mapq = mapqFromProb(maf.namesAndValues["mismap"])
                    # except KeyError: mapq = mapqMissing
                    editDistance = sum(1 for x, y in zip(ref.alignment, query.alignment) if x != y)
                    # no special treatment of ambiguous bases: might be a minor bug
                    editDistance = "NM:i:" + str(editDistance)

                    data.append(editDistance)

                    fout.write("\t".join([str(x) for x in data]) + "\n")
                    s = []

        if len(s):
            raise ValueError("Your MAf file seems truncated. ")

        fout.close()
        logging.info(f"Sueccessfuly Done in {self.outfile}")
        return fin_total//4

    def get_flag(self, qName, query_strand):
        if qName.endswith("/1"):
            qName = qName[:-2]
            if query_strand == "+":
                flag = "99"  # 1 + 2 + 32 + 64
            else:
                flag = "83"  # 1 + 2 + 16 + 64
        elif qName.endswith("/2"):
            qName = qName[:-2]
            if query_strand == "+":
                flag = "163"  # 1 + 2 + 32 + 128
            else:
                flag = "147"  # 1 + 2 + 16 + 128
        else:
            if query_strand == "+":
                flag = "0"
            else:
                flag = "16"
        return flag


class SAM2PAF:
    """Convert :term:`SAM` file to :term:`PAF` file

    The :term:`SAM` and :term:`PAF` formats are described in the :ref:`formats`
    section.

    Description:

    The header of the SAM file (lines starting with @) are dropped. However, the
    length of the target is retrieved from the @SQ line that must be present.


    Consider this SAM file with two alignements only. One is aligned on the
    target (first) while the other is not (indicated by the ``*`` characters)::

        @SQ	SN:ENA|K01711|K01711.1	LN:15894
        @PG	ID:minimap2	PN:minimap2	VN:2.5-r572	CL:minimap2 -a measles.fa Hm2_GTGAAA_L005_R1_001.fastq.gz
        HISEQ:426:C5T65ACXX:5:2302:1943:2127	0	ENA|K01711|K01711.1	448	60	101M	*	00	CTTACCTTCGCATCAAGAGGTACCAACATGGAGGATGAGGCGGACCAATACTTTTCACATGATGATCCAATTAGTAGTGATCAATCCAGGTTCGGATGGTT	BCCFFFFFHHHHHIIJJJJJJIIJJJJJJJJFHIHIJJJIJIIIIGHFFFFFFEEEEEEEDDDDDFDDDDDDDDD>CDDEDEEDDDDDDCCDDDDDDDDCD	NM:i:0	ms:i:202	AS:i:202	nn:i:0	tp:A:P	cm:i:14	s1:i:94	s2:i:0
        HISEQ:426:C5T65ACXX:5:2302:4953:2090	4	*	0	0	*	*	0	0	AGATCGGAAGAGCACACGTCTGAACTCCAGTCACGTGAAAATCTCGTATGCCGTCTTCTGCTTGAAAAAAAAAAAAAAAACAACCAAAAAGAGACGAACAA	CCCFFDDFAFFBHJHGGGIHIJBGGHIIJJJJJJJHGEIJGIFIIIHCBGHIJIIIIIJJHHHHEF@D@=;=,0)0&5&))+(((+((((&+(((()&&)(


    The equivalent PAF file is ::

        HISEQ:426:C5T65ACXX:5:2302:1943:2127	101	0	101	+	ENA|K01711|K01711.1	15894	447	548	101	101	60	NM:i:0	ms:i:202	AS:i:202	nn:i:0	tp:A:P	cm:i:14	s1:i:94	s2:i:0	cg:Z:101M

    In brief, the sequences are dropped. The final file is therefore smaller.
    Extra fields (starting from NM:i:0) can be dropped or kept using the
    keep_extra_field argument. Alignement with ``*`` characters are dropped.
    The first line (@SQ) is used to retrieve the length of the contigs that is
    stored in the PAF file (column 6).


    The 12 compulsary PAF fields are:

    ====== ======== ===========================================
    Col     Type    Description
    ====== ======== ===========================================
    1      string   Query sequence name
    2       int     Query sequence length
    3       int     Query start (0-based)
    4       int     Query end (0-based)
    5       char    Relative strand: "+" or "-"
    6      string   Target sequence name
    7       int     Target sequence length
    8       int     Target start on original strand (0-based)
    9       int     Target end on original strand (0-based)
    10      int     Number of residue matches
    11      int     Alignment block length
    12      int     Mapping quality (0-255; 255 for missing)
    ====== ======== ===========================================


    For developesr:

    Get the measles data from Sequana library (2 paired fastq files)::

        minimap2 measles.fa R1.fastq > approx-mapping.paf

    You can ask minimap2 to generate CIGAR at the cg tag of PAF with:

        minimap2 -c measles.fa R1.fastq > alignment.paf

    or to output alignments in the SAM format::

        minimap2 -a measles.fa R1.fastq > alignment.sam


    The SAM lines must contains 11 positional element and the NM:i and nn:i
    fields (see example above).

    """

    #: Default value
    _default_method = "python"

    def __init__(self, infile, outfile, total_line):
        """.. rubric:: constructor

        :param str infile: input SAM file
        :param str outfile: output PAF filename

        :reference: This function is a direct translation of
            https://github.com/lh3/miniasm/blob/master/misc/sam2paf.js (Dec.
            2017).

        """
        self.infile = infile
        self.outfile = outfile
        self.total_line = total_line


    def convert(self, *args, **kwargs):
        """Internal method"""
        pattern = r"(\d+)([MIDSHNX=])"

        extra_fields = kwargs.get("extra_fields", "SAM")
        # TODO: what is this ?
        pri_only = kwargs.get("pri_only", True)

        skipped = 0
        reference_lengths = {}
        with open(self.infile, "r") as fin:
            with open(self.outfile, "w") as fout:
                for lineno, line in track(enumerate(fin.readlines()),description="[bold green]Converting maf to sam...", total=self.total_line):

                    if line.startswith("@"):
                        if line.startswith("@SQ"):
                            match = re.findall(r"\tSN:(\S+)", line)
                            name = match[0] if len(match) else "unknown_reference"

                            match = re.findall(r"\tLN:(\d+)", line)
                            if len(match) == 1:
                                reference_lengths[name] = int(match[0])
                            else:
                                raise ValueError(
                                    "Could not parse SQ line to extract the length " "(LN: field missing maybe ?)"
                                )
                        continue

                    t = line.split()
                    flag = int(t[1])

                    if t[9] != "*" and t[10] != "*" and len(t[9]) != len(t[10]):
                        raise ValueError(
                            "ERROR at line "
                            + str(lineno)
                            + ":inconsistent SEQ and QUAL lengths - "
                            + str(len(t[9]))
                            + " != "
                            + str(len(t[10]))
                        )

                    if t[2] == "*" or (flag & 4):
                        skipped += 1
                        continue

                    # if flag is 256 and pri_only, we skip the alignment
                    if pri_only and (flag & 0x100):
                        continue

                    # Get the reference length for this alignment
                    if t[2] in reference_lengths:
                        tlen = reference_lengths[t[2]]
                    else:
                        raise KeyError("can't find the length of contig {}".format(t[2]))

                    # The reference is known but the length is not
                    if tlen == -1:
                        raise ValueError(
                            "ERROR at line " + str(lineno) + ": can't find the length of contig " + str(t[2])
                        )

                    # TODO explain what are the nn and NM tags
                    match = re.findall(r"\tnn:i:(\d+)", line)
                    if match:
                        nn = int(match[0])
                    else:
                        nn = 0

                    match = re.findall(r"\tNM:i:(\d+)", line)
                    if match:
                        NM = int(match[0])
                        have_NM = True
                    else:
                        NM = 0
                        have_NM = False
                    NM += nn

                    # See sequana.cigar for more information
                    clip = [0, 0]
                    I = [0, 0]  # Insertion
                    D = [0, 0]  # Deletion
                    M, N = 0, 0  # Matches
                    ql, tl, mm = (
                        0,
                        0,
                        0,
                    )
                    ext_cigar = False
                    n_cigar = 0

                    Zacc = ""
                    for count, letter in re.findall(pattern, t[5]):
                        l = int(count)
                        if letter == "M":
                            M += l
                            ql += l
                            tl += l
                            ext_cigar = False
                            Zacc += "{}M".format(count)
                        elif letter == "I":
                            I[0] += 1
                            I[1] += l
                            ql += l
                            Zacc += "{}I".format(count)
                        elif letter == "D":
                            D[0] += 1
                            D[1] += l
                            tl += l
                            Zacc += "{}D".format(count)
                        elif letter == "N":
                            N += l
                            tl += l
                        elif letter == "S":
                            clip[0 if M == 0 else 1] = l
                            ql += l
                        elif letter == "H":
                            clip[0 if M == 0 else 1] = l
                        elif letter == "=":
                            M += l
                            ql += l
                            tl += l
                            ext_cigar = True
                        elif letter == "X":
                            M += l
                            ql += l
                            tl += l
                            mm += l
                            ext_cigar = True
                        n_cigar += 1

                    prefix_msg = "at line {}: ".format(lineno) + "{}"

                    if n_cigar > 65535:
                        logging.warning(prefix_msg.format(str(n_cigar) + " CIGAR operations"))

                    if tl + int(t[3]) - 1 > tlen:
                        logging.warning(prefix_msg.format("alignment end " "position larger than ref length; skipped"))
                        continue

                    if t[9] != "*" and len(t[9]) != ql:
                        logging.warning(
                            prefix_msg.format(
                                " SEQ length inconsistent with CIGAR("
                                + str(len(t[9]))
                                + " != "
                                + str(ql)
                                + "); skipped"
                            )
                        )
                        continue

                    if have_NM is False or ext_cigar:
                        NM = I[1] + D[1] + mm

                    if NM < I[1] + D[1] + mm:
                        logging.warning(
                            prefix_msg.format(
                                " NM is less than the total number of gaps ("
                                + str(NM)
                                + " < "
                                + str(I[1] + D[1] + mm)
                                + ")"
                            )
                        )
                        NM = I[1] + D[1] + mm

                    # extra information to store in the PAF after the 12
                    # extra field from original code. The insert and
                    # deletions (io/in and do/di) and mm is the number of other
                    # substitutions ? NM -I[1] -D[1]
                    extra = [
                        "mm:i:" + str(NM - I[1] - D[1]),
                        "io:i:" + str(I[0]),
                        "in:i:" + str(I[1]),
                        "do:i:" + str(D[0]),
                        "dn:i:" + str(D[1]),
                    ]

                    match = M - (NM - I[1] - D[1])
                    blen = M + I[1] + D[1]
                    qlen = M + I[1] + clip[0] + clip[1]

                    # What does flag 16 means ?
                    if flag & 16:
                        qs = clip[1]
                        qe = qlen - clip[0]
                    else:
                        qs = clip[0]
                        qe = qlen - clip[1]

                    ts = int(t[3]) - 1
                    te = ts + M + D[1] + N

                    ## WARNING: difference with sam2paf.js : we add and substract nn
                    ## from match and blen to agree with the output SAM file
                    ## generated by minimap2

                    # The 12 compulsary fields to have a valid PAF format
                    a = [
                        t[0],
                        qlen,
                        qs,
                        qe,
                        "-" if flag & 16 else "+",
                        t[2],
                        tlen,
                        ts,
                        te,
                        match + nn,
                        blen - nn,
                        t[4],
                    ]
                    # cast to string and save in file
                    a = [str(x) for x in a]

                    # What extra fields do we want to add ?
                    # original fields found in the SAM file ?
                    if extra_fields == "SAM" and len(t) > 11:
                        fout.write("\t".join(a) + "\t" + "\t".join(t[11:]) + "\tcg:Z:{}\n".format(Zacc))
                    elif extra_fields == "summary":
                        fout.write("\t".join(a) + "\t" + "\t".join(extra) + "\n")
                    elif extra_fields is None:
                        fout.write("\t".join(a) + "\n")

        self.skipped = skipped
        logging.info(f"Sueccessfuly Done in {self.outfile}")

class Alignment:

    def __init__(self, in_r_start, in_r_end, in_q_start, in_q_end, in_cigar, in_strand, in_num_matches, in_aln_len):
        self.r_start = int(in_r_start) + 1
        self.r_end = int(in_r_end)
        self.q_start = int(in_q_start) + 1
        self.q_end = int(in_q_end)
        self.cigar = in_cigar
        self.strand = in_strand
        self.num_matches = int(in_num_matches)
        self.aln_len = int(in_aln_len)

        self.parsed_cigar = []
        self._parse_cigar()

        if self.strand == "-":
            # self.parsed_cigar = self.parsed_cigar[::-1]
            self.q_start, self.q_end = self.q_end, self.q_start

    def _parse_cigar(self):
        """ Given a CIGAR string, create a list of with each CIGAR operation as its own element. """
        cigar_chars = {
            'M',
            'I',
            'D',
            'N',
            'S',
            'H',
            'P',
            '=',
            'X'
        }

        this_field = ''
        for char in self.cigar:
            this_field += char
            if char in cigar_chars:
                self.parsed_cigar.append(this_field)
                this_field = ''


def write_delta(in_alns, in_r_lens, in_q_lens, outfile):
    with open(outfile, 'w') as f:
        f.write('file1 file2\n')
        f.write('NUCMER\n')

        # Iterate over each reference-query header pair
        for r_header in in_alns.keys():
            for q_header in in_alns[r_header].keys():
                f.write('>%s %s %r %r\n' % (r_header, q_header, in_r_lens[r_header], in_q_lens[q_header]))
                for z in in_alns[r_header][q_header]:
                    f.write('%r %r %r %r %r %r %r\n' % (
                        z.r_start,
                        z.r_end,
                        z.q_start,
                        z.q_end,
                        z.aln_len - z.num_matches,
                        z.aln_len - z.num_matches,
                        0
                    ))
                    # Continue with the cigar string
                    offsets = []
                    cigar = z.parsed_cigar
                    if cigar[0][-1] == 'S' or cigar[0][-1] == 'H':
                        cigar = cigar[1:-1]
                    else:
                        cigar = cigar[:-1]

                    counter = 1
                    for code in cigar:
                        if code[-1] == 'M':
                            counter += int(code[:-1])
                        elif code[-1] == 'D':
                            offsets.append(counter)
                            num_I = int(code[:-1])
                            for i in range(1, num_I):
                                offsets.append(1)
                            counter = 1
                        elif code[-1] == 'I':
                            offsets.append(-1*counter)
                            num_I = int(code[:-1])
                            for i in range(1, num_I):
                                offsets.append(-1)
                            counter = 1
                        else:
                            raise ValueError('Unexpected CIGAR code')
                    offsets.append(0)
                    offsets = [str(a) for a in offsets]
                    f.write('\n'.join(offsets) + '\n')
    logging.info(f"Sueccessfuly Done in {outfile}")


class PAF2DELTA:

    def __init__(self, infile, outfile, line_total):
      self.infile = infile
      self.outfile = outfile
      self.line_total = line_total

    def convert(self):
        # parser = argparse.ArgumentParser(description="Convert a PAF file to a nucmer delta file.\nPAF file must be created with a CIGAR string '-c' Minimap2 parameter ")
        # parser.add_argument("paf_file", metavar="<alns.paf>", type=str, help="PAF file to convert (gziped file allowed).")

        # args = parser.parse_args()
        paf_file = self.infile
        alns = dict()

        # Dictionaries to store reference and query sequence lengths
        r_chr_lens = dict()
        q_chr_lens = dict()

        if paf_file[-3:] == ".gz":
            f = gzip.open(paf_file)
        else:
            f = open(paf_file, 'r')

        for line in track(f, description="[bold green]Reading paf...", total=self.line_total):
            if not isinstance(line, str):
                fields = line.decode("utf-8").split('\t')
            else:
                fields = line.split('\t')

            # Get the reference/query sequence lengths
            r_header = fields[5]
            q_header = fields[0]
            if r_header not in r_chr_lens:
                r_chr_lens[r_header] = int(fields[6])
            if q_header not in q_chr_lens:
                q_chr_lens[q_header] = int(fields[1])

            # Get the rest of the info and instantiate the Alignment object
            cigar_string = ''
            for i in fields[12:]:
                if i.startswith('cg:'):
                    cigar_string = i.split(":")[2]
            if not cigar_string:
                raise ValueError("PAF file must contain a CIGAR string. Use 'minimap2 -c'")

            x = Alignment(
                fields[7],
                fields[8],
                fields[2],
                fields[3],
                cigar_string,
                fields[4],
                fields[9],
                fields[10]
            )

            # Add the alignments to the nested dictionary (first key=reference header, second key=query header)
            if r_header not in alns:
                alns[r_header] = defaultdict(list)
            alns[r_header][q_header].append(x)
        f.close()
        with console.status("[bold green]Writing delta...") as status:
            write_delta(alns, r_chr_lens, q_chr_lens, paf_file + '.delta')


if __name__ == "__main__":
    args, pg = get_args()
    cl = pg + ' ' + ' '.join(f'--{k} {v}' for k, v in vars(args).items())
    output_sam = args.out + ".sam"  ## unsorted
    Header = Header(pg, "0.1", cl)
    prefix = Prefix(args.prefix[0], args.prefix[1]) if args.prefix else Prefix(None, None)
    maf = MAF(filename=args.maf, outfile=output_sam, header=Header, prefix=prefix)
    line_total = maf.to_sam()
    output_paf = args.out + ".paf" ## unsorted
    sam2paf = SAM2PAF(output_sam, output_paf, line_total)
    sam2paf.convert()
    output_delta = args.out + ".delta"
    paf2delta = PAF2DELTA(output_paf, output_delta, line_total)
    paf2delta.convert()