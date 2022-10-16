import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

export type LinkItemType = {
    title: string;
    link: string;
    src: any;
    srcDark?: any;
  }

type ReferenceListProps = {
  data: Array<LinkItemType>;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function ReferenceList({
  data = [],
  wrapperClassName,
  wrapperStyle,
}: ReferenceListProps): JSX.Element {
  return (
    <div
      style={wrapperStyle}
      className={clsx(styles.unorderedList, wrapperClassName)}
    >
      <ul>
        {data.map((item: LinkItemType, index: number) => {
          return (
            <li className={styles.listItem} key={index}>
              <ThemedImage
                sources={{
                  light: item.src,
                  dark: item.srcDark ? item.srcDark : item.src,
                }}
                alt={item.title}
                loading="lazy"
              />
              <Link to={item.link} className={styles.titleArea}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.linkSVG}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill="#000" fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"/></svg>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}