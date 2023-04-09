import { rest } from 'msw';
import { data } from './cardsData/cardsData';

export const handlers = [
  rest.get('https://www.googleapis.com/books/v1/volumes', (_, res, ctx) => res(ctx.json(data))),
];
