import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../';
import React from 'react';

describe('<NotFoundPage />', () => {
  test('NotFoundPage mounts properly', () => {
    const wrapper = render(<NotFoundPage />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/NOT FOUND/i);
    expect(text.textContent).toBeTruthy();
  });
});
