import { Paths, TestIds } from '@/enums';
import { describe, it } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';

describe('search bar', async () => {
  it('must store the value in store when the component is unmounted and set the value when the component is initialized', async () => {
    const text = 'test';
    const { getByTestId, user } = renderWithRouter();

    const oldInput = getByTestId(TestIds.SEARCH_INPUT_ID) as HTMLInputElement;
    const aboutPagelink = getByTestId(Paths.ABOUT);

    await user.type(oldInput, text);
    await user.keyboard('[Enter]');
    await user.click(aboutPagelink);

    const homeLink = getByTestId(Paths.HOME);
    await user.click(homeLink);
    const newInput = getByTestId(TestIds.SEARCH_INPUT_ID) as HTMLInputElement;
    expect(newInput.value).toBe(text);
  });
});
