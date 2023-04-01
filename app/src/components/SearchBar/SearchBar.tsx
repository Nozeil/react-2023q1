import { searchKey } from '@/constants';
import { TestIds } from '@/enums';
import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { useBeforeUnload } from 'react-router-dom';
import cl from './SearchBar.module.css';

export function SearchBar() {
  const search = useRef<string>(localStorage.getItem(searchKey) || '');

  const saveSearchValueToLS = useCallback(() => {
    localStorage.setItem(searchKey, search.current);
  }, []);

  useBeforeUnload(saveSearchValueToLS);

  useEffect(() => () => saveSearchValueToLS(), [saveSearchValueToLS]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => (search.current = e.target.value);

  return (
    <div className={cl['search-bar']} data-testid={TestIds.SEARCH_BAR_ID}>
      <button className={cl.btn} />
      <input
        data-testid={TestIds.SEARCH_INPUT_ID}
        defaultValue={search.current}
        onChange={onChange}
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
