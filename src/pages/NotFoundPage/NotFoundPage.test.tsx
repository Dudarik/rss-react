import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<NotFoundPage />', () => {
  test('NotFoundPage mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <NotFoundPage pageTitle="Not found" />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Not found/i);
    expect(text.textContent).toBeTruthy();
  });

  test('NotFoundPage mounts properly without title', () => {
    const wrapper = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/untitled/i);
    expect(text.textContent).toBeTruthy();
  });
});
