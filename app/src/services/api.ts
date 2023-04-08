import { SearchResponse } from '@/models';
import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/';

const client = axios.create({
  baseURL: BASE_URL,
});

const searchBook = async (q: string) => {
  const resp = await client<SearchResponse>('volumes', {
    params: {
      q,
      maxResults: 40,
      orderBy: 'relevance',
      printType: 'books',
    },
  });
  return resp.data;
};

export const api = { searchBook };
