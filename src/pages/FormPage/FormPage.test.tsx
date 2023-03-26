import { IGameData } from '../../interfaces/cardsIterfaces';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const card: IGameData = {
  id: 1,
  title: 'New game',
  releaseDate: '22-03-2022',
  publisher: 1,
  players: '2-4',
  playingTime: '20-30',
  age: 8,
  lang: 'English',
  scoreBGG: 7,
  scoreTesera: 5,
  image: 'architech.webp',
  game: true,
};

describe('<FormPage />', () => {
  test('FormPage mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <FormPage pageTitle="Form" />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Add new card/i);
    expect(text.textContent).toBeTruthy();
  });
  test('FormPage adds cards properly', () => {
    const page = new FormPage({});

    page.addNewCard(card);

    expect(page.state.cardsData.games.length).toBe(1);
  });
});
