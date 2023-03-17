import { TestIds } from '@/enums';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';

function testPageAndItContent(PageId: string, initialIndex = 0) {
  const { getByTestId } = renderWithRouter(initialIndex);
  const page = getByTestId(PageId);
  const header = getByTestId(TestIds.HEADER_ID);

  expect(page).toBeInTheDocument();
  expect(header).toBeInTheDocument();

  if (PageId === TestIds.HOME_ID) {
    const searchBar = getByTestId(TestIds.SEARCH_BAR_ID);
    expect(searchBar).toBeInTheDocument();
  }
}

describe('layout', () => {
  const { HOME_ID, ABOUT_ID, NOT_FOUND_ID } = TestIds;

  it('should render the home page', () => {
    testPageAndItContent(HOME_ID);
  });

  it('should render the about page', () => {
    testPageAndItContent(ABOUT_ID, 1);
  });

  it('should render the error page', () => {
    testPageAndItContent(NOT_FOUND_ID, 2);
  });

  it('should render the error page', () => {
    testPageAndItContent(NOT_FOUND_ID, 3);
  });
});
