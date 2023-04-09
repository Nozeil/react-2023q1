import { rest } from 'msw';
import { data } from './data/data';

export const handlers = [
  rest.get('https://www.googleapis.com/books/v1/volumes', (_, res, ctx) => res(ctx.json(data))),
  rest.get('https://www.googleapis.com/books/v1/volumes/:volumeId', (_, res, ctx) =>
    res(ctx.json(data.items[0]))
  ),
];
