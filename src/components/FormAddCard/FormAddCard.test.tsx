import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import FormAddCard from '.';

import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../tests/setup';

describe('<FormAddCard />', () => {
  test('FormAddCard mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <FormAddCard />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/submit/i);
    expect(text.textContent).toBeTruthy();
  });

  test('FormAddCard add card error', async () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <FormAddCard />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const btnSubmit = screen.getByText(/submit/i);

    await userEvent.click(btnSubmit);

    const err = screen.getByText(/Choose file/i);

    expect(err).toBeInTheDocument();
  });
});
