import React, { useEffect } from 'react';

import { format, validate } from 'rut.js';
import { useRouter } from 'next/router';

import { withExam } from '../../context/exam-context';
import Button from '../Button';
import Input from '../Input';
import InputFile from '../InputFile';
import styles from './index.module.scss';

const Form = ({ exam }) => {
  const router = useRouter();
  const examen = router.query;

  useEffect(() => {
    exam.setSelected(exam.exams.find((e) => e.title === examen.title[0]));
  }, []);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Esas solicitando una reserva para</h3>
      <h5 className={styles.examName}>{exam.selected.title}</h5>
      <input
        type="hidden"
        data-sf-role="form-id"
        value="eb6f30c8-1230-410f-896b-8953ed0853ae"
        name="FormId"
      />

      <form
        action="https://www.clinicaalemana.cl/solicitud-reserva-imagenología/?sf_cntrl_id=ctl00%24ContentplaceholderMain%24C001"
        method="POST"
        name="defaultFormctl00$ContentplaceholderMain$C001"
        encType="multipart/form-data"
        className={styles.form}
      >
        <Input
          type="text"
          label="Nombre Completo"
          name="TextFieldController_2"
          required
        />
        <Input
          type="text"
          name="TextFieldController_1"
          label="Rut o pasaporte"
          required
          onChangeValidation={(value) => !validate(value)}
          onBlurFormatter={format}
        />
        <Input
          name="EmailTextFieldController"
          type="text"
          label="Email"
          required
        />

        <Input
          name="TextFieldController_3"
          type="tel"
          label="Teléfono"
          value=""
          required
        />
        <InputFile
          name="FileFieldController"
          type="file"
          label="Adjuntar orden médica"
          value=""
          required
        />
        <Button type="submit" className={styles.btn}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default withExam(Form);
