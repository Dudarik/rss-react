import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CardsList from '.';

describe('<CardList />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <CardsList />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Архитекторы западного королевства/i);
    expect(text.textContent).toBeTruthy();
  });
});
