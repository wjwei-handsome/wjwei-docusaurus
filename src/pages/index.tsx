// import React from 'react';
import React, { useState } from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from './index.module.css';
// import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

const slides = [
  <header
    className={clsx("hero hero--primary", styles.heroBanner, styles.slide)}>
    <div className="container">
      <img className={styles.logo} alt="Logo" src="/img/Avatar-s.png" />
      <h1 className="hero__title">Wenjie Wei 魏文杰</h1>
      <p className="hero__subtitle">&quot;My Beatuifal Dark Twisted Fantsty&quot;</p>
      <div className={styles.button}>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
          )}
          to="/about-me/">
          About me
        </Link>
      </div>
    </div>
  </header>,
  <header
    className={clsx("hero hero--primary", styles.heroBanner, styles.slide)}>
    <img className={styles.bkgimg} src="/img/westlake-starbucks.jpg" />
    <div className={clsx("container", styles.storycontainer)}>
      <h1 className="hero__title">志在必得</h1>
      <p className="hero__subtitle">西湖大学面试前的小幸运🍀</p>
      <div className={styles.button}>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
          )}
          to="/blog/westlake-interview">
          Read more
        </Link>
      </div>
    </div>
  </header>,
  <header
    className={clsx("hero hero--primary", styles.heroBanner, styles.slide)}>
    <img className={styles.bkgimg} src="/img/blog/2024_1-2_bg.jpeg" />
    <div className={clsx("container", styles.storycontainer)}>
      <h1 className="hero__title">龙年🐲大吉</h1>
      <p className="hero__subtitle"></p>
      <div className={styles.button}>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
          )}
          to="/blog/2024_1-2_fun">
          Read more
        </Link>
      </div>
    </div>
  </header>,
  <div
    className={clsx(styles.heroBanner, styles.slide)}
    style={{
      backgroundImage: "url(/img/zeamap.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%, 100%"
    }}>
    <div className={clsx(styles.button, styles.readMore)}>
      <Link
        className="button button--outline button--lg"
        style={{ color: "#4071BE" }}
        href="https://db.cngb.org/zeamap">
        <h1 className="hero__title">ZEAMAP Database</h1>
      </Link>
    </div>
  </div>
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [buttonVisible, setButtonVisible] = useState(false);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="wenjiewei wjwei weiwenjie blog bioinfomatic">
      {/* <HomepageHeader /> */}
      {/* <CarouselProvider
        className={styles.carousel}
        totalSlides={slides.length}
        isPlaying
        interval={3000}
        dragEnabled={false}
        isIntrinsicHeight
        infinite
        naturalSlideWidth={undefined}
        naturalSlideHeight={undefined}>
        <div
          onMouseEnter={() => {
            setButtonVisible(true);
          }}
          onMouseLeave={() => {
            setButtonVisible(false);
          }}>
          <Slider>
            {slides.map((elem, idx) => (
              <Slide key={idx} index={idx}>
                {elem}
              </Slide>
            ))}
          </Slider>
          <ButtonBack
            id="back"
            className={clsx(
              styles.button,
              styles.carouselbutton,
              styles.backbutton,
            )}
            style={{ visibility: buttonVisible ? "visible" : "hidden" }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonBack>
          <ButtonNext
            className={clsx(
              styles.button,
              styles.carouselbutton,
              styles.nextbutton,
            )}
            style={{ visibility: buttonVisible ? "visible" : "hidden" }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonNext>
          <div className={styles.carouseldots}>
            {slides.map((__, idx) => (
              <Dot className={styles.carouseldot} key={idx} slide={idx} />
            ))}
          </div>
        </div>
      </CarouselProvider> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
