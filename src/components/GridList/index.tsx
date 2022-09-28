import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { GridItemType } from "@site/src/data";

type GridListProps = {
  data?: Array<GridItemType>;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

// TODO - Card Design

export default function GridList({
  data = [],
  wrapperClassName,
  wrapperStyle,
}: GridListProps): JSX.Element {
  return (
    <div
      style={wrapperStyle}
      className={clsx(styles.listWrapper, wrapperClassName)}
    >
      {data.map((item) => {
        return (
          <Link key={item.title} className={styles.cardWrapper} to={item.link}>
            <img
              src={item.src}
              className={clsx(styles.image)}
              alt={item.title}
            />
            <div
              className={clsx(
                styles.title,
                item.fontSize === "md" && styles.title_md,
                item.fontSize === "sm" && styles.title_sm
              )}
            >
              {item.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
