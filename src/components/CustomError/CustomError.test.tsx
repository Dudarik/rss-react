import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CustomError from '.';

describe('<CustomError />', () => {
  test('CustomError mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <CustomError {...{ message: 'This is test error message' }} />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/This is test error message/i);
    expect(text.textContent).toBeTruthy();
  });
  test('CustomError mounts properly without message', () => {
    const wrapper = render(
      <MemoryRouter>
        <CustomError {...{ message: '' }} />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();
  });
});
