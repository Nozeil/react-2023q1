import { TestIds } from '@/enums';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../SearchBar/SearchBar';
import { KeyboardEvent, useCallback, useState } from 'react';

export function Home() {
  const [search, setSearch] = useState<string>('');

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      setSearch(e.currentTarget.value);
    }
  }, []);

  const setSearchOnLoad = (search: string) => setSearch(search);

  return (
    <section data-testid={TestIds.HOME_ID}>
      <SearchBar onKeyUp={onKeyUp} setSearchOnLoad={setSearchOnLoad} />
      <Cards search={search} />
    </section>
  );
}
