import { TestIds } from '@/enums';
import { useCallback, KeyboardEvent } from 'react';
import cl from './SearchBar.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectSearch, setSearch } from '@/redux/searchSlice';
import { useLazySearchBooksQuery } from '@/services/books';

export function SearchBar() {
  const search = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const [trigger] = useLazySearchBooksQuery();

  const onKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      if (e.code === 'Enter' && value) {
        dispatch(setSearch(value));
        trigger(value);
      }
    },
    [dispatch, trigger]
  );

  return (
    <div className={cl['search-bar']} data-testid={TestIds.SEARCH_BAR_ID}>
      <button className={cl.btn} />
      <input
        data-testid={TestIds.SEARCH_INPUT_ID}
        defaultValue={search}
        onKeyUp={onKeyUp}
        className={cl.input}
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
}
