import { book } from '@/__mocks__/data/data';
import { Cards } from '@/components/Cards/Cards';
import { TestIds } from '@/enums';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { describe } from 'vitest';
import { wrapWithProvider } from './utils/wrapWithProvider';

describe('cards', () => {
  const { CARD_ID, CARDS_LIST_ID, LOADER } = TestIds;
  it('should render cards list with one card with mock data', async () => {
    const { title, subtitle } = book.volumeInfo;
    const { getByTestId, getAllByTestId, getByText } = render(wrapWithProvider(<Cards />));
    const loader = getByTestId(LOADER);
    await waitForElementToBeRemoved(loader);

    expect(getByTestId(CARDS_LIST_ID)).toBeInTheDocument();
    expect(getAllByTestId(CARD_ID).length).toBe(1);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
  });
});
