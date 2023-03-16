import { describe, test, expect } from 'vitest';
import { getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from '.';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('<Router />', () => {
  test('Router mounts properly', async () => {
    const wrapper = render(
      <MemoryRouter>
        <Router setCurrentPageTitle={() => {}} />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();

    const errorLink = screen.getByText('Архитекторы западного королевства');

    await userEvent.click(errorLink);

    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });
});
