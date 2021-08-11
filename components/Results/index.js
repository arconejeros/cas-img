import React from 'react';

import folder from '../../public/assets/folder.png';
import { withExam } from '../../context/examContext';
import Button from '../Button';
import Card from '../Card';
import styles from './index.module.scss';

const Results = ({ exam }) => {
  const filterApplied = exam.filter.length > 0;

  const e =
    exam.filteredExams.length > 0
      ? exam.filteredExams
      : !filterApplied
        ? exam.exams
        : [];

  return (
    <div className={styles.container}>
      {filterApplied && exam.filteredExams.length === 0 ? (
        <div className={`${styles.noResultsContainer}`}>
          <div>
            <h3>No encontramos resultados en imagenología</h3>
            <p>
              Te invitamos a buscar por medio de código o nombre en otros
              servicios de exámenes y procedimientos
            </p>
            <Button className="m-top-3">Buscar</Button>
          </div>
          <div className="row middle">
            <img src={folder} alt="" />
          </div>
        </div>
      ) : (
        <>
          <div className="column">
            <h3 className={styles.title}>Solicita tu reserva</h3>
            <h5 className={styles.subTitle}>
              De los siguientes exámenes o procedimientos de imagenes:
            </h5>
          </div>
          <div className={styles.cardContainer}>
            {e.map((element, index) => (
              <Card key={index.toString()} examen={element} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default withExam(Results);
