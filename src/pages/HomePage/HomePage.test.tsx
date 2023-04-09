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

describe('mock test <HomePage />', () => {
  test('HomePage mounts properly with mock data', async () => {
    render(
      <MemoryRouter>
        <HomePage pageTitle="Home" />
      </MemoryRouter>
    );

    expect(await screen.findByText('Dune: Imperium - Rise of Ix')).toBeInTheDocument();
  });
});
