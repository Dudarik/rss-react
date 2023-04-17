import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('<HomePage />', () => {
  test('HomePage mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage pageTitle="Home" />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Loading/i);
    expect(text.textContent).toBeTruthy();
  });
});

describe('mock test <HomePage />', () => {
  test('HomePage mounts properly with mock data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage pageTitle="Home" />
        </MemoryRouter>
      </Provider>
    );

    expect(await screen.findByText('Dune: Imperium - Rise of Ix')).toBeInTheDocument();
  });
});
