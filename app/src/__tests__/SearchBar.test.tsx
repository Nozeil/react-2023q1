import { Paths, TestIds } from '@/enums';
import { localStorageMock } from '@/__mocks__/localStorage';
import { describe, it, vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock(),
});

describe('search bar', async () => {
  beforeEach(() => localStorage.clear());

  it('must store the value in local storage when the component is unmounted and set the value when the component is initialized', async () => {
    const text = 'test';
    const { getByTestId, user } = renderWithRouter();

    const oldInput = getByTestId(TestIds.SEARCH_INPUT_ID) as HTMLInputElement;
    const aboutPagelink = getByTestId(Paths.ABOUT);

    const setItemSpy = vi.spyOn(localStorage, 'setItem');
    const getItemSpy = vi.spyOn(localStorage, 'getItem');

    await user.type(oldInput, text);
    await user.click(aboutPagelink);

    expect(setItemSpy).toBeCalled();

    const homeLink = getByTestId(Paths.HOME);
    await user.click(homeLink);
    const newInput = getByTestId(TestIds.SEARCH_INPUT_ID) as HTMLInputElement;

    expect(getItemSpy).toBeCalled();
    expect(newInput.value).toBe(text);
  });
});
