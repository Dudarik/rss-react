import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Card from '.';

const cardData = {
  id: 0,
  title: 'Архитекторы западного королевства',
  releaseDate: '25.12.2015',
  publisher: 0,
  players: '1 - 5',
  playingTime: '60 - 90',
  age: 12,
  rulesTime: 15,
  lang: 'Русский',
  tags: ['воркплейсмент', 'евро', 'еврогейм', 'миплплейсмент'],
  scoreBGG: 7.77,
  scoreTesera: 7.77,
  image: 'architech.webp',
  game: true,
  publisherTitle: 'Лавка игр',
  publisherImage: 'lavkagames.webp',
};

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <Card {...cardData} />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Архитекторы западного королевства/i);
    expect(text.textContent).toBeTruthy();
  });
});
