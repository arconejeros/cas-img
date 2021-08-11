import React from 'react';

import bellIcon from '../../public/assets/bellIcon.png';
import hospitalIcon from '../../public/assets/hospitalIcon.png';
import scheduleIcon from '../../public/assets/scheduleIcon.png';
import styles from './index.module.scss';

const Location = ({ location, isLastItem }) => {
  const { title, address, phone, availability } = location;
  return (
    <div
      className={`${styles.container} ${
        !isLastItem && styles.addSeparator
      } m-top-1`}
    >
      {address && (
        <div className="row m-bottom-05">
          <img
            src={hospitalIcon}
            className={styles.icon}
            alt="Clínica Alemana"
          />
          <div className={styles.infoContainer}>
            <h3>{title}</h3>
            <a
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noreferrer"
              href={`http://maps.google.com/?q=${encodeURI(address)}`}
            >
              {address}
            </a>
          </div>
        </div>
      )}
      {phone && (
        <div className="row m-bottom-05">
          <img src={bellIcon} className={styles.icon} alt="Clínica Alemana" />
          <div className={styles.infoContainer}>
            <div className="row">
              <h3>Telefono</h3>
              &nbsp;
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
        </div>
      )}
      {availability && (
        <div className="row m-bottom-05">
          <img
            src={scheduleIcon}
            className={styles.icon}
            alt="Clínica Alemana"
          />
          <div className={styles.infoContainer}>
            <h3>Horario de atención</h3>
            <h4>{availability}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
