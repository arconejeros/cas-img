import React, { useState, useRef } from 'react';

import _ from 'lodash';
import { isMobile } from 'react-device-detect';

import { withExam } from '../../context/exam-context';
import { useOutsideAlerter } from '../../utils/clickOutside';
import styles from './index.module.scss';
import Option from './Option';

const Filter = ({ exam }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpen(false));

  const onChangeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = exam.exams.filter((ex) => {
      const loweredKeywords = ex.keywords.map((k) => k.toLowerCase());
      const keywordsMatches = _.filter(
        loweredKeywords,
        (s) => s.indexOf(value) !== -1,
      );
      const titleMatches = ex.title.toLowerCase().indexOf(value) !== -1;
      return keywordsMatches.length > 0 || titleMatches;
    });
    exam.setFilter(value);
    exam.setFilteredExams(filtered);
  };
  const filterApplied = exam.filter.length > 0;
  const examList =
    exam.filteredExams.length > 0
      ? exam.filteredExams
      : !filterApplied
        ? exam.exams
        : [];
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        ¿Qué exámenes o procedimiento de imagenes estás buscando?
      </h3>
      <div className={`${styles.inputContainer}`} ref={wrapperRef}>
        <input
          onFocus={() => setOpen(true)}
          className={styles.input}
          onChange={onChangeHandler}
          type="text"
          placeholder={
            isMobile ? 'Nombre del examen' : 'Buscar exámenes o procedimiento'
          }
        />
        <button
          className={styles.searchButton}
          type="button"
          onClick={() => setOpen(!open)}
        >
          <img
            src="/assets/chevronDown.png"
            className={styles.searchIcon}
            alt="Abrir Menu"
          />
        </button>
        {open && (
        <div className={styles.optionsContainer}>
          {examList.map((e, i) => (
            <Option option={e} key={i.toString()} />
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default withExam(Filter);
