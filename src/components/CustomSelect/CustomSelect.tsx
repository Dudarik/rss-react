import React, { ReactNode, Component } from 'react';

interface CustomSelectProps {
  values: number[] | Record<string, string>[];
  id?: string;
  title?: string;
}

class CustomSelect extends Component<CustomSelectProps> {
  render(): ReactNode {
    const { values, id, title } = this.props;

    return (
      <select title={title || ''} id={id || ''}>
        {values.map((value) => {
          if (typeof value === 'number')
            return (
              <option value={value.toString()} key={value.toString()}>
                {value.toString()}
              </option>
            );
          else {
            const entries = Object.entries(value);

            return (
              <option value={entries[0][0]} key={entries[0][0]}>
                {entries[0][1]}
              </option>
            );
          }
        })}
      </select>
    );
  }
}

export default CustomSelect;
