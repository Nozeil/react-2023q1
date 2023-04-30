import { Headers, Request, Response } from 'cross-fetch';
import fetch from 'cross-fetch';

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});
