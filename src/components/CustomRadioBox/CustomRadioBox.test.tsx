import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CustomRadioBox from '.';
import { createRefs } from '../../helpers';
import { IRadio } from '../../interfaces/formInterfaces';

const dataArr = createRefs<IRadio, HTMLInputElement>([
  { id: 'rus', value: 'Русский' },
  { id: 'eng', value: 'English' },
  { id: 'fre', value: 'Le français' },
]);

describe('<Header />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <CustomRadioBox {...{ title: 'Language', name: 'lang', dataArr }} />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/English/i);
    expect(text.textContent).toBeTruthy();
  });
});
