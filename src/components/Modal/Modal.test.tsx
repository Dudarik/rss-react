import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from '.';

import { Provider } from 'react-redux';
import { store } from '../../../tests/setup';

const currentGameId = 7;
const isModalOpen = true;
const setIsModalOpen = vi.fn();

describe('<Modal /> + mock', () => {
  test('Modal mounts properly', async () => {
    const wrapper = render(
      <Provider store={store}>
        <Modal {...{ currentGameId, isModalOpen, setIsModalOpen }} />
      </Provider>
    );

    expect(wrapper).toBeTruthy();

    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument();
  });

  test('Modal mounts properly and render mock', async () => {
    render(
      <Provider store={store}>
        <Modal {...{ currentGameId, isModalOpen, setIsModalOpen }} />
      </Provider>
    );

    expect(await screen.findByText('Dune: Imperium - Rise of Ix')).toBeInTheDocument();
  });
});
