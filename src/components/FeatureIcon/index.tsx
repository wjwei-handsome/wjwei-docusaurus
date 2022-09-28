import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";

type FeatureIconType = {
  onClick?: () => void;
  src: any;
  srcDark?: any;
  title: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function FeatureIcon({
  onClick,
  src,
  srcDark,
  title,
  wrapperClassName,
  wrapperStyle,
}: FeatureIconType): JSX.Element {
  return (
    <div
      className={clsx(styles.featureIconArea, wrapperClassName)}
      style={wrapperStyle}
    >
      <ThemedImage
        sources={{
          light: src,
          dark: srcDark ? srcDark : src,
        }}
        alt={title}
        loading="lazy"
        onClick={onClick}
      />
      {/* TODO use customProps */}
      {/* <div className={styles.title}>{title}</div> */}
    </div>
  );
}
