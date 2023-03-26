import { Card } from '@/components/Card/Card';
import { TestIds } from '@/enums';
import { data } from '@/__mocks__/cardsData/cardsData';
import { render } from '@testing-library/react';
import { describe } from 'vitest';

describe('card', () => {
  it('should render one card', () => {
    const item = data[0];
    const { about, price, title, subtitle } = item;
    const { getByText, getByTestId, getAllByTestId } = render(<Card {...item} />);

    [about, price, title, subtitle].forEach((item) => {
      const text = getByText(item);
      expect(text).toBeInTheDocument();
    });

    const card = getByTestId(TestIds.CARD_ID);
    const cards = getAllByTestId(TestIds.CARD_ID);

    expect(card).toBeInTheDocument();
    expect(cards.length).toBe(1);
  });
});
