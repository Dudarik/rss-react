import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('RSS-React');

    const text = screen.getByText(/RSS-React/i);
    expect(text.textContent).toBeTruthy();
  });
});
