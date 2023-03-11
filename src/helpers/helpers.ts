import { IGamesData } from '../interfaces/cardsIterfaces';
import db from '../db/db.json';

export const getGamesData = (): IGamesData | undefined => {
  if (db) return db;
  return undefined;
};
