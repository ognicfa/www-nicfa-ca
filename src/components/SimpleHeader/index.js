import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function SimpleHeader({ children, bgimage }) {
  let validBgImage = true;
  let bgImageStyle;
  let classes;

  switch ( bgimage ) {
    case 'hands':
      bgImageStyle = styles.handsBackground;
      break;
    case 'campus':
      bgImageStyle = styles.campusBackground;
      break;
    case 'files':
      bgImageStyle = styles.filesBackground;
      break;
    default:
      validBgImage = false;
  }

  if ( validBgImage ) {
    classes = clsx('hero hero--primary', styles.heroBanner, bgImageStyle );
  } else {
    classes = clsx('hero hero--primary', styles.heroBanner );
  }

  return (
    <header className={classes}>
      <div className="container">
      <h1 className="hero__title">{children}</h1>
      </div>
    </header>
  );
}
