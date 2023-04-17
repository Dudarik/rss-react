import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('<FormPage />', () => {
  test('FormPage mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <FormPage pageTitle="Form" />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Add new card/i);
    expect(text.textContent).toBeTruthy();
  });
});
