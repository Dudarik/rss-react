import { IPublisher } from '../../interfaces/cardsIterfaces';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ICustomSelectProps {
  values: number[] | IPublisher[];
  id: string;
  title: string;
  register: UseFormRegister<FieldValues>;
}

const CustomSelect = (props: ICustomSelectProps) => {
  const { values, id, title, register } = props;
  return (
    <label htmlFor={id}>
      {title}

      <select
        id={id}
        defaultValue="-1"
        {...register(id, {
          required: `Please choose value of ${title}`,
          min: {
            value: 0,
            message: 'Please choose value',
          },
        })}
      >
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
