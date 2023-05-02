import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MainNav from '.';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import styles from './MainNav.module.scss';

describe('<MainNav />', () => {
  test('MainNav mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const homeLinkText = screen.getByText(/Home/i);
    expect(homeLinkText.textContent).toBeTruthy();
  });

  test('Click to link and change class', async () => {
    render(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>
    );

    const aboutLink = screen.getByText('About us');

    await userEvent.click(aboutLink);

    expect(aboutLink).toHaveClass(styles.active);
  });
});
