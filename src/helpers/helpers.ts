import { IGameData, IGamesData, IPublisher } from '../interfaces/cardsIterfaces';
import db from '../db/db.json';

type TReturnGamesData = IGamesData | IGameData[] | IPublisher[] | undefined;

export const getGamesData = (key?: keyof IGamesData): TReturnGamesData => {
  const data = db as IGamesData;
  if (data) {
    if (key) return data[key];
    return data;
  }
  return undefined;
};
