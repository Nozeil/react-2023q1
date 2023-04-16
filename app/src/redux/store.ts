import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { booksApi } from '@/services/books';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});
