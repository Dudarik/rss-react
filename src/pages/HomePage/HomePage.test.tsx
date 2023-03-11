import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<HomePage />', () => {
  test('HomePage mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/HOME page/i);
    expect(text.textContent).toBeTruthy();
  });
});
