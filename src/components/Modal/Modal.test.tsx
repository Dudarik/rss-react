import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from '.';

const currentGameId = 7;
const isModalOpen = true;
const setIsModalOpen = vi.fn();

describe('<Modal /> + mock', () => {
  test('Modal mounts properly', async () => {
    const wrapper = render(<Modal {...{ currentGameId, isModalOpen, setIsModalOpen }} />);

    expect(wrapper).toBeTruthy();

    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument();
  });

  test('Modal mounts properly and render mock', async () => {
    render(<Modal {...{ currentGameId, isModalOpen, setIsModalOpen }} />);

    expect(await screen.findByText('Dune: Imperium - Rise of Ix')).toBeInTheDocument();
  });
});
