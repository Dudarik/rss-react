import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from '.';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../tests/setup';

describe('<Router />', () => {
  test('Router mounts properly', async () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <Router />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toBeTruthy();

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
