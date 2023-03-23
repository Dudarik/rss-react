import { IPublisher } from '../../interfaces/cardsIterfaces';
import React, { ReactNode, Component, RefObject } from 'react';

interface CustomSelectProps {
  values: number[] | IPublisher[];
  id: string;
  title: string;
  refProp: RefObject<HTMLSelectElement>;
}

class CustomSelect extends Component<CustomSelectProps> {
  render(): ReactNode {
    const { values, id, title, refProp } = this.props;

    return (
      <>
        <label htmlFor={id}>{title}</label>

        <select id={id} ref={refProp} defaultValue="-1">
          <option value="-1" disabled>
            select the option
          </option>
          {values.map((value) => {
            if (typeof value === 'number')
              return (
                <option value={value.toString()} key={value.toString()}>
                  {value.toString()}
                </option>
              );
            else {
              return (
                <option value={value.id} key={value.id}>
                  {value.title}
                </option>
              );
            }
          })}
        </select>
      </>
    );
  }
}

export default CustomSelect;
