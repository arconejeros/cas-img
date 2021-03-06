import React from 'react';
import Filter from '@/components/Filter';
import Results from '@/components/Results';
import { withExam } from '../context/exam-context';

const IndexPage = ({ procedures, exam }) => {
  exam.setExams(procedures);
  return (
    <>
      <Filter />
      <Results />
    </>
  );
};

export default withExam(IndexPage);
