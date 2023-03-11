import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutPage } from '../';
import React from 'react';

describe('<AboutPage />', () => {
  test('AboutPage mounts properly', () => {
    const wrapper = render(<AboutPage />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/ABOUT page/i);
    expect(text.textContent).toBeTruthy();
  });
});
