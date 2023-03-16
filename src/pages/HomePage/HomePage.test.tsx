import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<HomePage />', () => {
  test('HomePage mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <HomePage pageTitle="Home" />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Home/i);
    expect(text.textContent).toBeTruthy();
  });
});
