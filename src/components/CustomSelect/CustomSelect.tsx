import { IPublisher } from 'interfaces/cardsIterfaces';
import React, { ReactNode, Component } from 'react';

interface CustomSelectProps {
  values: number[] | IPublisher[];
  id: string;
  title?: string;
}

class CustomSelect extends Component<CustomSelectProps> {
  render(): ReactNode {
    const { values, id, title } = this.props;

    return (
      <label htmlFor={id}>
        {title}
        <select id={id}>
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
  }
}

export default CustomSelect;
