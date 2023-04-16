import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCardsReducer from './formCardsSlice';
import { booksApi } from '@/services/books';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    formCards: formCardsReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});
