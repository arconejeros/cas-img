/* eslint-disable */
import React from 'react';

import styles from '../Card/index.module.scss';

const Button = ({
  onClick = null,
  children,
  variation = null,
  className = '',
  style,
  type,
}) => (
  <button
    type={type}
    style={style}
    onClick={onClick}
    className={`${styles.btn} ${styles[variation]} ${className}`}
  >
    {children}
  </button>
);
export default Button;
