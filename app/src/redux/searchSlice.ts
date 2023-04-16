import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';

interface SearchState {
  initialValue: string;
  value: string;
}

const initialState: SearchState = {
  initialValue: 'harry potter',
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
