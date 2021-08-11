/* eslint-disable */
import React, { useState } from 'react';

import styles from './index.module.scss';
import { withExam } from '../../context/exam-context';

const Input = ({
  disabled,
  label = '',
  name,
  placeholder,
  required = false,
  type = 'text',
  onChangeValidation,
  onBlurFormatter,
  exam
}) => {
  const [state, setState] = useState({
    focused: false,
  });
  const capInputName = () => name.charAt(0).toUpperCase() + name.slice(1);

  const { focused } = state;


  const inputValue = exam[`${name}`].value;
  const inputError = exam[`${name}`].error;

  const onChangeHandler = (evt) => {
    let error = false;
    const { value } = evt.target;

    if (onChangeValidation) {
      error = onChangeValidation(value);
    }

    exam[`set${capInputName()}`]({
      value,
      error,
    });
  };

  const focusHandler = (focus, evt) => {
    if (!focus && onBlurFormatter) {
      exam[`set${capInputName()}`]((prevElement) => ({
        value: onBlurFormatter(evt.target.value),
        error: prevElement.error,
      }));
    }
    setState({ focused: focus });
  };

  return (
    <div
      className={`
        ${styles.inputContainer} ${focused && styles.focused}
        ${(placeholder || inputValue) && styles.filled}
        ${inputError && styles.error}
        ${disabled && styles.disabled}
      `}
    >
      <label>
        {label} {required && '*'}
      </label>
      <input
        name={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => focusHandler(true)}
        onBlur={(evt) => focusHandler(false, evt)}
        className={`${styles.input}`}
        type={type}
        value={inputValue}
        onChange={onChangeHandler}
      />
      <label className={`${styles.helperText}`}>{inputError}</label>
    </div>
  );
};

export default withExam(Input);
