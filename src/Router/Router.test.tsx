import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from '.';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<Router />', () => {
  test('Router mounts properly', async () => {
    const wrapper = render(
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
