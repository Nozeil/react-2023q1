import { BookResponse, SearchResponse } from '@/models';
import '@/utils/fetch';

import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import fetch from 'cross-fetch';

const BASE_URL = 'https://www.googleapis.com/books/v1/';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    fetchFn: fetch,
  }),
  endpoints: (builder) => ({
    searchBooks: builder.query<SearchResponse, string>({
      query: (q) => `volumes?q=${q}&maxResults=40&orderBy=relevance&printType=books`,
    }),
    getSpecificBook: builder.query<BookResponse, string>({
      query: (id) => `volumes/${id}`,
    }),
  }),
});

export const { useSearchBooksQuery, useLazySearchBooksQuery, useGetSpecificBookQuery } = booksApi;
