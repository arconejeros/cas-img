/* eslint-disable */
import React, { useState, useContext } from 'react';

import createContainer from 'constate';

import { data } from './data';

const nameHOC = (Component, suffix = '') =>
  `${
    Component.originalName ||
    Component.displayName ||
    Component.name ||
    'Component'
  }${suffix}`;

function useExamContext() {
  const initialState = {
    title: '',
    whatItIs: '',
    location: [],
    howToPrepare: '',
    action: [],
    alert: false,
  };
  const [exams, setExams] = useState(data);
  const [filteredExams, setFilteredExams] = useState([]);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState(initialState);
  const [showDetails, setShowDetail] = useState(false);
  const [loading, setLoading] = useState({});
  const [step, setStep] = useState(0);
  const [TextFieldController_2, setTextFieldController_2] = useState({
    value: '',
    error: false,
  });
  const [TextFieldController_1, setTextFieldController_1] = useState({
    value: '',
    error: false,
  });
  const [EmailTextFieldController, setEmailTextFieldController] = useState({
    value: '',
    error: false,
  });
  const [TextFieldController_3, setTextFieldController_3] = useState({
    value: '',
    error: false,
  });
  const [FileFieldController, setFileFieldController] = useState({
    value: '',
    error: false,
  });

  const setInitialState = () => setSelected(initialState);

  return {
    loading,
    setLoading,
    exams,
    setExams,
    selected,
    setSelected,
    showDetails,
    setShowDetail,
    step,
    setStep,
    TextFieldController_2,
    setTextFieldController_2,
    TextFieldController_1,
    setTextFieldController_1,
    EmailTextFieldController,
    setEmailTextFieldController,
    TextFieldController_3,
    setTextFieldController_3,
    FileFieldController,
    setFileFieldController,
    setInitialState,
    filteredExams,
    setFilteredExams,
    filter,
    setFilter,
  };
}

const ExamContext = createContainer(useExamContext);

const withExam = (WrappedComponent) => {
  const { getInitialProps } = WrappedComponent;
  const ComponentWithExamData = (props) => {
    const examDataWithState = useContext(ExamContext.Context);
    return <WrappedComponent {...props} exam={examDataWithState} />;
  };
  if (typeof getInitialProps === 'function') {
    ComponentWithExamData.getInitialProps = getInitialProps;
  }
  ComponentWithExamData.originalName = nameHOC(WrappedComponent);
  ComponentWithExamData.displayName = nameHOC(WrappedComponent, 'WithExam');
  return ComponentWithExamData;
};

export default ExamContext;
export { withExam };
