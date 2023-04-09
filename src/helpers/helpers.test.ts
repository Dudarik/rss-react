import { describe, it } from 'vitest';
import { getGame, getGames, getPublishers } from './helpers';

describe('getGame tests', () => {
  it('must return game data', async () => {
    const game_data = await getGame(7);

    expect(game_data.title).toBe('Dune: Imperium - Rise of Ix');
    expect(game_data.releaseDate).toBe('31.12.2021');
  });
});

describe('getGames tests', () => {
  it('must return game data', async () => {
    const games_data = await getGames();
    const findDune = games_data.find((item) => item.title === 'Dune: Imperium');

    expect(findDune?.title).toBe('Dune: Imperium');
    expect(findDune?.releaseDate).toBe('20.02.2020');
  });
});

describe('getPublishers tests', () => {
  it('must return publisher data', async () => {
    const publisher_data = await getPublishers();
    const findDune = publisher_data.find((item) => item.title === 'Gaga games');

    expect(findDune?.title).toBe('Gaga games');
    expect(findDune?.id).toBe(1);
  });
});
