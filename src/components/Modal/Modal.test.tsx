import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from '.';

const currentGameId = 2;
const isModalOpen = true;
const setIsModalOpen = vi.fn();

describe('<Modal />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(<Modal {...{ currentGameId, isModalOpen, setIsModalOpen }} />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Loading\.\.\./i);
    expect(text).toBeInTheDocument();
  });
});
