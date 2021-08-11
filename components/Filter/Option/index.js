import React from 'react';

import parse from 'html-react-parser';
import Link from 'next/link';

import { withExam } from '../../../context/exam-context';
import styles from './index.module.scss';

const Option = ({ option, exam }) => {
  const highlightWord = (keyword) => {
    if (exam.filter.length > 0) {
      const reg = new RegExp(exam.filter, 'gi');
      return `${keyword.replace(reg, (str) => `<b>${str}</b>`)}`;
    }
    return keyword;
  };

  return (
    <div className={`${styles.container}`}>
      <Link href={`/details/${option.title}`}>
        <div>
          <h3>{parse(highlightWord(option.title))}</h3>
          <div className="row">
            {option.keywords.map((keyword, index) => (
              <span key={index.toString()} style={{ marginRight: '5px' }}>
                {parse(highlightWord(keyword))}
                {option.keywords.length !== index + 1 && ', '}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default withExam(Option);
