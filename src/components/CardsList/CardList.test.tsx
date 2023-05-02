import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CardsList from '.';
import { Provider } from 'react-redux';
import { store } from '../../../tests/setup';
import userEvent from '@testing-library/user-event';

const cardsData = {
  publishers: [
    {
      id: 0,
      title: 'Лавка игр',
      img: 'lavkagames.webp',
    },
  ],
  games: [
    {
      id: 0,
      title: 'Архитекторы западного королевства',
      releaseDate: '25.12.2015',
      publisher: 0,
      players: '1 - 5',
      playingTime: '60 - 90',
      age: 12,
      lang: 'Русский',
      scoreBGG: 7.77,
      scoreTesera: 7.77,
      image: 'architech.webp',
      game: true,
      publisherTitle: 'Лавка игр',
      publisherImage: 'lavkagames.webp',
    },
  ],
};

describe('<CardList />', () => {
  test('Card mounts properly', async () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <CardsList {...cardsData} />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Архитекторы западного королевства/i);
    expect(text.textContent).toBeTruthy();

    await userEvent.click(text);

    const err = screen.getByRole('button');

    expect(err).toBeInTheDocument();
  });
});
