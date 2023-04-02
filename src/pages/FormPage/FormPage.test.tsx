import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<FormPage />', () => {
  test('FormPage mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <FormPage pageTitle="Form" />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Add new card/i);
    expect(text.textContent).toBeTruthy();
  });
});
