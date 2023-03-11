import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '.';
import React from 'react';

describe('<Footer />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/FOOTER/i);
    expect(text.textContent).toBeTruthy();
  });
});
