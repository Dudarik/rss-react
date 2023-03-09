import { IGamesData } from '../interfaces/cardsIterfaces';
import db from '../db/db.json';

export const getGamesData = (): IGamesData | undefined => {
  if (db) return db;
  return undefined;
  // try {
  //   const response = await fetch();
  //   if (response.status !== 200) throw new Error(`Can't load data from DB`);

  //   return (await response.json()) as IGamesData;
  // } catch (error) {
  //   console.log(error);
  //   return undefined;
  // }
};
