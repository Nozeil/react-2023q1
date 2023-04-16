import { BookResponse, SearchResponse } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://www.googleapis.com/books/v1/';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
