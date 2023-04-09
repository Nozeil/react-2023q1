import { Cards } from '@/components/Cards/Cards';
import { TestIds } from '@/enums';
import { api } from '@/services/api';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, vi } from 'vitest';

describe('cards', () => {
  const { CARD_ID, CARDS_LIST_ID, LOADER } = TestIds;
  it('should make call to api', async () => {
    const searchBookSpy = vi.spyOn(api, 'searchBook');
    render(<Cards search={'harry potter'} />);

    expect(searchBookSpy).toBeCalled();
  });
  it('should render cards list with one card', async () => {
    const { getByTestId, findByTestId, findAllByTestId } = render(
      <Cards search={'harry potter'} />
    );
    const loader = getByTestId(LOADER);
    await waitForElementToBeRemoved(loader);
    const cardList = await findByTestId(CARDS_LIST_ID);
    const card = await findAllByTestId(CARD_ID);

    expect(cardList).toBeInTheDocument();
    expect(card.length).toBe(1);
  });
});
