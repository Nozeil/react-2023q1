import { book } from '@/__mocks__/data/data';
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
  it('should render cards list with one card with mock data', async () => {
    const { title, subtitle } = book.volumeInfo;
    const { getByTestId, getAllByTestId, getByText } = render(<Cards search={'harry potter'} />);
    const loader = getByTestId(LOADER);
    await waitForElementToBeRemoved(loader);

    expect(getByTestId(CARDS_LIST_ID)).toBeInTheDocument();
    expect(getAllByTestId(CARD_ID).length).toBe(1);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
  });
});
