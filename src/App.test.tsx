import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Alex Reznichenko/i);
    expect(text.textContent).toBeTruthy();
  });
});
