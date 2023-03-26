import { Cards } from '@/components/Cards/Cards';
import { TestIds } from '@/enums';
import { data } from '@/__mocks__/cardsData/cardsData';
import { render } from '@testing-library/react';
import { describe } from 'vitest';

describe('cards', () => {
  const { CARD_ID, CARDS_LIST_ID } = TestIds;
  it('should render all cards', () => {
    const { getByTestId, getAllByTestId } = render(<Cards />);
    const cards = getAllByTestId(CARD_ID);
    const cardsList = getByTestId(CARDS_LIST_ID);

    expect(cardsList).toBeInTheDocument();
    expect(cards.length).toBe(data.length);
  });
});
