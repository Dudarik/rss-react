import { IRadioBox } from 'interfaces/formInterfaces';
import React from 'react';

import styles from './CustomRadioBox.module.scss';

const CustomRadioBox = (props: IRadioBox) => {
  const { dataArr, name, title, register } = props;

  return (
    <fieldset className={styles.radioFieldset}>
      <legend>{title}</legend>
      {dataArr.map((item) => {
        const { id, value } = item;

        return (
          <label htmlFor={id} key={id}>
            <input type="radio" id={id} value={value} {...register(name, { required: true })} />
            {value}
          </label>
        );
      })}
    </fieldset>
  );
};

export default CustomRadioBox;
