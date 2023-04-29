import { initializeStore, reducer } from './store';

export type RootState = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof initializeStore>;
export type AppDispatch = Store['dispatch'];
