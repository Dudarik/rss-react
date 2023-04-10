import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import FormAddCard from '.';

import userEvent from '@testing-library/user-event';

describe('<FormAddCard />', () => {
  const addNewCard = vi.fn();
  test('FormAddCard mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <FormAddCard addNewCard={addNewCard} />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/submit/i);
    expect(text.textContent).toBeTruthy();
  });

  test('FormAddCard add card error', async () => {
    const wrapper = render(
      <MemoryRouter>
        <FormAddCard addNewCard={addNewCard} />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const btnSubmit = screen.getByText(/submit/i);

    await userEvent.click(btnSubmit);

    const err = screen.getByText(/Choose file/i);

    expect(err).toBeInTheDocument();
  });
});
