import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from "@theme/ThemedImage";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from '@theme/TabItem';


// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: JSX.Element;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures(): JSX.Element {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export type feature = {
  title: string;
  sources: {
    light: string;
    dark: string;
  };
  description: JSX.Element;
};

export const features: feature[] = [
  {
    title: "Enthused To CS",
    sources: {
      light: "/img/cs.png",
      dark: "/img/cs-dark.png",
    },
    description: (
      // <>
      //   😎Fluent with "Hello World" in programming languages. <br />
      //   ⭐️Some experiences in Rust/Python/Django in bioinfomatic. <br />
      //   📊Use R/Vega-lite as my drawing board. <br />
      //   🐧With Linux/Shell everyday. <br />
      //   🦀My new love: Rust <br />
      //   ⛽️Always be a novice.
      // </>
      // <>
      //   <CodeBlock language='bash'>
      //     $ wjwei --help{'\n'}{'\n'}
      //     Name: Wenjie Wei{'\n'}
      //     Version: {new Date().getFullYear()}-{new Date().getMonth() + 1}-{new Date().getDate()}{'\n'}
      //     Usage: wjwei [OPTIONS] {'<'}COMMANDS{'>'}{'\n'}
      //     Commands:{'\n'}
      //     {'    '}bioinfo: Play biological problems with code{'\n'}
      //     {'    '}coder: GET HANDS DIRTY!{'\n'}
      //     {'    '}student: HZAU_2_WestLake{'\n'}
      //     Options:{'\n'}
      //     {'    '}-l, --linux [default: true]{'\n'}
      //     {'    '}-r, --rust [default: true]{'\n'}
      //     {'    '}-p, --python [default: true]{'\n'}
      //     {/* {'    '}-g, --vegalite [default: true]{'\n'} */}
      //     {'    '}-f, --frontend [default: false]{'\n'}
      //   </CodeBlock>
      // </>
      <></>
    ),
  },
  {
    title: "Love My Life",
    sources: {
      light: "/img/life.png",
      dark: "/img/life-dark.png",
    },
    description: (
      // <>
      //   🙌Work hard, play harder<br />
      //   {/* 🏞For my trip, COVID, F**K off！ <br /> */}
      //   🏀Old fan of Thunder and Westbrook0 <br />
      //   ☕️A coffee a day keeps the burden at bay. <br />
      //   🎥Since the invention of the movie, human life has been extended at least three times.<br />
      //   🎵Music is a universal language, now prefer JayChou and Kanye.<br />
      //   🏋️Enjoy the endorphins secreted by exercise.  <br />
      // </>
      // <>
      //   <Tabs className={styles.uniquetabs}>
      //     <TabItem value="Basketball" label="🏀" default>
      //       <div style={{ display: "flex", flexDirection: "column" }}>
      //         {/* <p>pppppp</p> */}
      //         <img src="/img/test.jpg" className={styles.tabimg} />
      //       </div>
      //     </TabItem>
      //     <TabItem value="Music" label="🎵">
      //       <div style={{ display: "flex", flexDirection: "column" }}>
      //         <img src="/img/music2023.png" className={styles.tabimg} />
      //       </div>
      //     </TabItem>
      //     <TabItem value="Coffee" label="☕️">
      //       A coffee a day keeps the burden at bay.
      //     </TabItem>
      //     <TabItem value="Fitness" label="🏋️">
      //       Enjoy the endorphins secreted by exercise.
      //     </TabItem>
      //     <TabItem value="Movie" label="🎥">
      //       Since the invention of the movie, human life has been extended at least three times.
      //     </TabItem>
      //   </Tabs>
      // </>
      <></>
    ),
  },
  {
    title: "Bland Student",
    sources: {
      light: "/img/research.png",
      dark: "/img/research-dark.png",
    },
    description: (
      <>
        {/* Master student of Crop genomics in the National Key Laboratory of Crop Genetic Improvement, Huazhong Agricultural University. <br />
        My research interests include:
        <ul>
          <li>Bio-database architecture and development</li>
          <li>Graphic genomics</li>
          <li>Bioinformatic kits development</li>
          <li>🥱</li>
        </ul> */}
      </>
    ),
  },
];


function Feature({
  sources,
  title,
  description,
  // index,
}: feature & { index: number }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureImage}
          sources={sources}
          alt={title}
          style={{ height: "320px" }}
        />
      </div>
      <h2 style={{ textAlign: "center" }}>
        {title}
      </h2>
      {/* <p style={{ fontSize: "20px", fontWeight: "500" }}> */}
      {description}
      {/* </p> */}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container" style={{ "maxWidth": "100%" }}>
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>

      <CodeBlock language='text' className={styles.codeblock} showLineNumbers={false}>
        $ wjwei --help{'\n'}{'\n'}
        Name: Wenjie Wei🇨🇳{'\n'}{'\n'}
        Version: {new Date().getFullYear()}-{new Date().getMonth() + 1}-{new Date().getDate()}{'\n'}{'\n'}
        Usage: wjwei [OPTIONS] {'<'}COMMANDS{'>'}{'\n'}{'\n'}

        Commands:{'\n'}
        {'    '}bioinfo: {'\n'}
        {'    '}{'    '}🧬Play biological problems with code. Years of experience in bioinformatics analysis, working in the field of genomics.{'\n'}
        {'    '}coder: {'\n'}
        {'    '}{'    '}🛠️Get my hands dirty! Always be a rookie and stay hungry. Enjoy contributing to the bioinfo community.{'\n'}
        {'    '}life: {'\n'}
        {'    '}{'    '}🙌Work hard, play harder! Enjoy dopamine and endorphins from nature🏞, food🥑, coffee☕️, movies🎥, music🎧 and sports🏋.{'\n'}
        {'    '}student: {'\n'}
        {'    '}{'    '}👨‍🎓Master student of Crop genomics in the National Laboratory of Crop Genetic Improvement, HZAU.{'\n'}
        {'    '}{'    '}💎PhD candidate of WestLake University.
        {'\n'}
        {'    '}{'    '}💡Interested in: 1.graph-pan-genome 2.complex phenotye ~ multi omics 3.database/tools.
        {'\n'}
        {'    '}gamer: {'\n'}
        {'    '}{'    '}🎮Hundreds of hours of Zelda/Pokemon/Stardew Valley{'\n'}{'\n'}
        Options:{'\n'}
        {'    '}-l, --linux    {'    '}💻Unix/Commmand Line/Fish enthusiast    [default: true]{'\n'}
        {'    '}-r, --rust     {'    '}🦀YES! I'm a Rustacean!    [default: true]{'\n'}
        {'    '}-p, --python   {'    '}🐍Use for Django && quickly develop simple scripts.    [default: true]{'\n'}
        {'    '}-v, --visualize{'    '}📊Prefer vega-lite/R for data presentation.    [default: true]{'\n'}
        {'    '}-f, --frontend {'    '}🌐Stay at the basic stage for Vue/React, just google. [default: false]{'\n'}
      </CodeBlock>

    </section>
  );
}