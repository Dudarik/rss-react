import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CustomRadioBox from '.';

const dataArr = [
  { id: 'rus', value: 'Русский' },
  { id: 'eng', value: 'English' },
  { id: 'fre', value: 'Le français' },
];

describe('<CustomRadioBox />', () => {
  test('CustomRadioBox mounts properly', () => {
    const register = vi.fn();
    const wrapper = render(
      <MemoryRouter>
        <CustomRadioBox {...{ title: 'Language', name: 'lang', dataArr, register }} />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/English/i);
    expect(text.textContent).toBeTruthy();
  });
});
