import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutPage } from '../';
import React from 'react';

describe('<AboutPage />', () => {
  test('AboutPage mounts properly', () => {
    const wrapper = render(<AboutPage pageTitle="About" />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/About/i);
    expect(text.textContent).toBeTruthy();
  });
});
