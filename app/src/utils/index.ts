import type * as express from 'express';
import type { BookResponse } from '@/models';
import type { ImageLinks } from '@/types';

export function createNewImgLinks(links: ImageLinks) {
  const thumbnailLink = '/svg/question.svg';

  return {
    smallThumbnail: links?.smallThumbnail || thumbnailLink,
    thumbnail: links?.thumbnail || thumbnailLink,
    small: links?.small || thumbnailLink,
    medium: links?.medium || thumbnailLink,
    large: links?.large || thumbnailLink,
    extraLarge: links?.extraLarge || thumbnailLink,
  };
}

export function adaptBook(book: BookResponse) {
  const volumeInfo = book.volumeInfo;
  const imageLinks = book.volumeInfo?.imageLinks || {};
  const newImageLinks = createNewImgLinks(imageLinks);

  return {
    id: book.id,
    title: volumeInfo?.title || '',
    subtitle: volumeInfo?.subtitle || '',
    authors: volumeInfo?.authors || '',
    publisher: volumeInfo?.publisher || '',
    publishDate: volumeInfo?.publishedDate || '',
    imageLinks: newImageLinks,
    description: volumeInfo?.description || '',
  };
}

export function createFetchRequest(req: express.Request): Request {
  const origin = `${req.protocol}://${req.get('host')}`;

  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  req.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
