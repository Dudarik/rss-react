import { IGameData, IGamesData, IPublisher } from '../interfaces/cardsIterfaces';
import db from '../db/db.json';
import { createRef, RefObject } from 'react';

type TReturnGamesData = IGamesData | IGameData[] | IPublisher[] | undefined;

const API_URL = 'http://178.21.11.247:3000';
const API_GAMES_URL = `${API_URL}/games`;
const API_PUBLISHERS_URL = `${API_URL}/publishers`;

export const fetchData = async (endpoint: string, queryParams?: string): Promise<Response> => {
  let queryUrl = endpoint;
  if (queryParams) queryUrl += `?${queryParams}`;

  try {
    const response = await fetch(queryUrl);

    if (!response.ok) throw new Error(`Can't fetch`);

    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(new Error('Cant resolve promise'));
  }
};

export const fetchGames = async (queryParams?: string): Promise<IGameData[]> => {
  const response = await fetchData(API_GAMES_URL, queryParams);

  return (await response.json()) as IGameData[];
};

export const fetchPublishers = async (queryParams?: string): Promise<IPublisher[]> => {
  const response = await fetchData(API_PUBLISHERS_URL, queryParams);

  return (await response.json()) as IPublisher[];
};

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
