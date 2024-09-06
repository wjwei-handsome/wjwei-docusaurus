/* eslint-disable @typescript-eslint/no-explicit-any */

import python from "@site/static/img/icon/python.png";
import linux from "@site/static/img/icon/linux.png";
import rlang from "@site/static/img/icon/r.png";
import bioinfo from "@site/static/img/icon/bioinformatics.png";
// import django from "@site/static/img/icon/django.png";
import rust from "@site/static/img/icon/rust.png";
import algorithm from "@site/static/img/icon/algorithm.png";
import potpourri from "@site/static/img/icon/tools.png";
import haskell from "@site/static/img/icon/haskell.png";


export interface GridItemType {
  readonly title: string;
  readonly link: string;
  readonly src: any;
  readonly fontSize: FontSize;
}

type FontSize = "sm" | "md" | "lg";

function gridItem(
  title: string,
  link: string,
  src: any,
  fontSize: FontSize = "lg"
): GridItemType {
  return {
    title: title,
    link: link,
    src: src,
    fontSize: fontSize,
  };
}

const DocGridList: Array<GridItemType> = [
  gridItem("Linux", "/docs/category/linux", linux),
  gridItem("Potpourri", "/docs/category/potpourri", potpourri),
  gridItem("Bio-Info", "/docs/category/bioinformatics", bioinfo),
  gridItem("Rust", "/docs/category/rust", rust),
  gridItem("Python", "/docs/category/python", python),
  gridItem("Algorithm", "/docs/category/algorithm", algorithm),
  gridItem("Haskell", "/docs/category/haskell", haskell),
  // gridItem("Django", "/docs/category/django", django),
];


export { DocGridList, };
