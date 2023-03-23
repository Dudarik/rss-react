import { IRadioBox } from 'interfaces/formInterfaces';
import React, { Component, ReactNode } from 'react';

import styles from './CustomRadioBox.module.scss';

class CustomRadioBox extends Component<IRadioBox> {
  render(): ReactNode {
    const { dataArr, name, title } = this.props;
    return (
      <fieldset className={styles.radioFieldset}>
        <legend>{title}</legend>
        {dataArr.map((item, index) => {
          const { id, value, refProp } = item;

          return (
            <label htmlFor={id} key={id}>
              <input
                type="radio"
                name={name}
                id={id}
                value={value}
                ref={refProp}
                defaultChecked={index === 0}
              />
              {value}
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default CustomRadioBox;
