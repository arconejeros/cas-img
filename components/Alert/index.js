import React, { useState } from 'react';

import gsap, { Back } from 'gsap';

import alertIcon from '../../public/assets/alertIcon.png';
import closeIcon from '../../public/assets/closeIcon.png';
import styles from './index.module.scss';

const Alert = ({ text }) => {
  let alertRef;
  const [showAlert, setShowAlert] = useState(true);
  const closeAlert = () => {
    gsap.to(alertRef, 0.3, {
      autoAlpha: 0,
      ease: Back.easeInOut,
      onComplete: () => {
        setShowAlert(false);
      },
    });
  };
  return (
    showAlert && (
      <div
        className={styles.container}
        ref={(el) => {
          alertRef = el;
        }}
      >
        <img className={styles.icon} src={alertIcon} alt="Atención" />

        {/* eslint-disable-next-line react/no-danger */}
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeAlert}
        >
          <img
            className={styles.closeIcon}
            src={closeIcon}
            alt="Cerrar alerta"
          />
        </button>
      </div>
    )
  );
};
export default Alert;
