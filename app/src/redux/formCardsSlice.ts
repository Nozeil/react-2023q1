import { FormCardsData } from '@/components/Form/Form.types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';

interface State {
  cards: FormCardsData;
}

const initialState: State = {
  cards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formCardsSlice.actions;
export const selectCards = (state: RootState) => state.formCards.cards;
export default formCardsSlice.reducer;
