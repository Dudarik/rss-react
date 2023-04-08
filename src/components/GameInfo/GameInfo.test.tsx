import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import GameInfo from '.';

const gameInfoData = {
  releaseDate: '15-03-1982',
  players: '2-4',
  age: 12,
  playingTime: '90-120',
  lang: 'Russian',
};

describe('<Header />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(<GameInfo {...gameInfoData} />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Russian/i);
    expect(text).toBeInTheDocument();
  });
});
