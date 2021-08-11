import React from 'react';

import Link from 'next/link';

import { withExam } from '../../context/exam-context';
import Button from '../Button';
import styles from './index.module.scss';

const Card = ({ examen }) => {
  const actionButton = () => {
    if (examen.action.type === 'call') {
      return (
        <Button
          className="m-bottom-1"
          onClick={() => window.open(`tel:${examen.action.url}`)}
        >
          {examen.action.type === 'call' ? examen.action.url : 'Solicitar'}
        </Button>
      );
    }
    return (
      <Link href={`/form/${examen.title}`}>
        <Button className="m-bottom-1">
          {examen.action.type === 'call' ? examen.action.url : 'Solicitar'}
        </Button>
      </Link>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{examen.title}</h3>
        <p className={styles.description}>{examen.short}</p>
      </div>
      <div className={styles.actionContainer}>
        {actionButton()}

        {examen.moreInfo && (
          <Link href={`/details/${examen.title}`}>
            <Button variation="outlined">{examen.moreInfo}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default withExam(Card);
