import { IGameData, IGamesData, IPublisher } from '../interfaces/cardsIterfaces';
import db from '../db/db.json';
import { createRef, RefObject } from 'react';

type TReturnGamesData = IGamesData | IGameData[] | IPublisher[] | undefined;

export const getGamesData = (key?: keyof IGamesData): TReturnGamesData => {
  const data = db as IGamesData;
  if (data) {
    if (key) return data[key];
    return data;
  }
  return undefined;
};

export const createRefs = <T, U>(arrOfObj: T[]): (T & { refProp: RefObject<U> })[] => {
  return arrOfObj.map((obj) =>
    Object.assign({}, obj, {
      refProp: createRef<U>(),
    })
  );
};
