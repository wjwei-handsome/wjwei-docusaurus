import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from "@theme/ThemedImage";

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
    title: "Addicted To CS",
    sources: {
      light: "/img/programming.svg",
      dark: "/img/programming.svg",
    },
    description: (
      <>
        Fluent with both front-end and back-end programming languages.
        Experienced with graphics language Asymptote and typesetting language
        LaTeX.
      </>
    ),
  },
  {
    title: "Love My Life",
    sources: {
      light: "/img/trip.svg",
      dark: "/img/trip.svg",
    },
    description: (
      <>
        {
          "Gold medalist in physics, chemistry, and biology olympiads. Did extensive research in STEM-related fields. Read more about my STEM experience in the {section}."
        }
      </>
    ),
  },
  {
    title: "Bland Graduatestudent",
    sources: {
      light: "/img/scientist.svg",
      dark: "/img/scientist.svg",
    },
    description: (
      <>
        Started public forum debating in 8th grade. Debated on topics including
        gene editing, CJS, poverty alleviation, etc. Won regional &amp; national
        championships, as well as multiple outstanding speakers. Currently doing
        World Schools.
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
      <h3 style={{textAlign: "center"}}>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} index={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
  );
}