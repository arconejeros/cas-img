/* eslint-disable */
import React, { useState } from 'react';

import styles from './index.module.scss';

import closeIcon from '../../public/assets/closeIcon.png';
import { withExam } from '../../context/examContext';

const InputFile = ({
  disabled,
  label = '',
  name,
  placeholder,
  required = false,
  type = 'text',
  onChangeValidation,
  onBlurFormatter,
  exam,
}) => {
  let inputRef;
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

  const clearInput = () => {
    inputRef.value = '';
    exam.setFileFieldController({
      value: '',
      error: false,
    })
  }

  return (
    <div
      className={`
        ${styles.inputContainer} ${focused && styles.focused}
        ${(placeholder || inputValue) && styles.filled}
        ${inputError && styles.error}
        ${disabled && styles.disabled}
        ${styles.input}
      `}
    >
      <label>
        {label} {required && '*'}
      </label>
      <input
        ref={(el) => {
          inputRef = el;
        }}
        name={name}
        style={{ opacity: 0 }}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => focusHandler(true)}
        onBlur={(evt) => focusHandler(false, evt)}
        type={type}
        value={inputValue}
        onChange={onChangeHandler}
      />
      {inputValue.replace('C:\\fakepath\\', '')}
      {inputValue && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={clearInput}
        >
          <img className={styles.closeIcon} src={closeIcon} alt="" />
        </button>
      )}
      <label className={`${styles.helperText}`}>{inputError}</label>
    </div>
  );
};

export default withExam(InputFile);
