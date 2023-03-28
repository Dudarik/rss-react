import { IPublisher } from '../../interfaces/cardsIterfaces';
import React, { RefObject } from 'react';

interface ICustomSelectProps {
  values: number[] | IPublisher[];
  id: string;
  title: string;
  refProp: RefObject<HTMLSelectElement>;
}

const CustomSelect = (props: ICustomSelectProps) => {
  const { values, id, title, refProp } = props;
  return (
    <label htmlFor={id}>
      {title}

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
    </label>
  );
};

export default CustomSelect;
