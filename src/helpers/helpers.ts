import { IGameData, IPublisher } from '../interfaces/cardsIterfaces';

import { createRef, RefObject } from 'react';

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

export const getGame = async (id: number, queryParams?: string): Promise<IGameData> => {
  const response = await fetchData(`${API_GAMES_URL}/${id}`, queryParams);

  return (await response.json()) as IGameData;
};

export const getGames = async (queryParams?: string): Promise<IGameData[]> => {
  const response = await fetchData(API_GAMES_URL, queryParams);

  return (await response.json()) as IGameData[];
};

export const getPublishers = async (queryParams?: string): Promise<IPublisher[]> => {
  const response = await fetchData(API_PUBLISHERS_URL, queryParams);

  return (await response.json()) as IPublisher[];
};

export const createRefs = <T, U>(arrOfObj: T[]): (T & { refProp: RefObject<U> })[] => {
  return arrOfObj.map((obj) =>
    Object.assign({}, obj, {
      refProp: createRef<U>(),
    })
  );
};
