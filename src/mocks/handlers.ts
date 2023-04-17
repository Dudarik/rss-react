import { API_GAMES_URL, API_PUBLISHERS_URL } from '../config/API_paths';
import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
  rest,
} from 'msw';

import games_data from './games_data.json';
import publishhers_data from './publishers_data.json';

const API_GAME_URL = `${API_GAMES_URL}/:gameId`;

const handlerGetGame = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  const reqParams = req.params;
  if (!reqParams) throw new Error('Need gameId in params');
  return res(
    ctx.status(200),
    ctx.json(games_data.find((item) => item.id === parseInt(reqParams.gameId.toString())))
  );
};

const handlerGetGames = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => res(ctx.status(200), ctx.json(games_data));

const handlerGetPublishers = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(publishhers_data));
};

export const handlers = [
  rest.get(API_GAME_URL, handlerGetGame),
  rest.get(API_GAMES_URL, handlerGetGames),
  rest.get(API_PUBLISHERS_URL, handlerGetPublishers),
];
