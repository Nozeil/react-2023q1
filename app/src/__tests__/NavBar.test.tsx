import { Paths, TestIds } from '@/enums';
import { describe } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';

async function testLinkWithClick(linkId: string, pageId: string, initialIndex = 0) {
  const { getByTestId, user } = renderWithRouter(initialIndex);
  const link = getByTestId(linkId);
  await user.click(link);
  const page = getByTestId(pageId);
  expect(page).toBeInTheDocument();
}

describe('navbar', async () => {
  const { HOME_ID, ABOUT_ID } = TestIds;
  const { HOME, ABOUT } = Paths;

  it('about link should redirect to about page', async () => {
    await testLinkWithClick(ABOUT, ABOUT_ID);
  });
  it('home link should redirect to home page', async () => {
    await testLinkWithClick(HOME, HOME_ID, 1);
  });
});
