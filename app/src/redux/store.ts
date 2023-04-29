import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCardsReducer from './formCardsSlice';
import { booksApi } from '@/services/books';
import type { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { RootState } from './types';

export const reducer = combineReducers({
  search: searchReducer,
  formCards: formCardsReducer,
  [booksApi.reducerPath]: booksApi.reducer,
});

export function initializeStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksApi.middleware),
  });
}
