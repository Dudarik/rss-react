import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from '.';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('<Router />', () => {
  test('Router mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();
  });
});
