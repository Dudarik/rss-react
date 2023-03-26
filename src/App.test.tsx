import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Alex Reznichenko/i);
    expect(text.textContent).toBeTruthy();
  });
});
