import { describe, expect, it } from 'vitest';
import { getGamesData } from './helpers';
import db from '../db/db.json';

describe('getGamesData tests', () => {
  it('must return data', () => {
    const data = getGamesData();

    expect(data).toEqual(db);
  });
});
