/* eslint-disable */
import React, { createContext, useState } from 'react';

const FormContext = createContext();

function FormProvider({ children, initialValues }) {
  const [step, setStep] = useState(1);
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
  const [answers, setAnswers] = useState([]);
  const [response, setResponse] = useState('');

  const value = {
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
    answers,
    step,
    setStep,
    setAnswers,
    response,
    setResponse,
    ...initialValues,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

function useForm() {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}

export { FormProvider, useForm, FormContext };
