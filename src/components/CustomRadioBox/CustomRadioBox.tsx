import { IRadioBox } from 'interfaces/formInterfaces';
import React, { Component, ReactNode } from 'react';

import styles from './CustomRadioBox.module.scss';

class CustomRadioBox extends Component<IRadioBox> {
  render(): ReactNode {
    const { dataArr, name, title } = this.props;
    return (
      <fieldset className={styles.radioFieldset}>
        <legend>{title}</legend>
        {dataArr.map((item) => {
          const { id, value, refProp } = item;

          return (
            <label htmlFor={id} key={id}>
              <input type="radio" name={name} id={id} value={value} ref={refProp} />
              {value}
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default CustomRadioBox;
