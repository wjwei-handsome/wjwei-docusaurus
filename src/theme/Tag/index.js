import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function Getcountspan({ count }) {
  // if count > 5 , return a span with red color
  let color;
  if (count > 5) {
    if (count > 10) {
      if (count > 20) {
        if (count > 30) {
        } else {
          color = "#e5c185"
        }
        color = "#fbf2c4"
      } else {
        color = "#c7522a"
      }
    } else {
      color = "#008585"
    }
  } else {
    color = "#74a892"
  }
  return (<span style={{ "background": color }}>{count}</span>);

}

export default function Tag({ permalink, label, count }) {
  return (
    <Link
      href={permalink}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
      )}>
      {label}
      <Getcountspan {...count = { count }} />
      {/* {count && <span style={{ "color": "red" }}>{count}</span>} */}
    </Link>
  );
}
