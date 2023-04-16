import { TestIds } from '@/enums';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../SearchBar/SearchBar';

export function Home() {
  return (
    <section data-testid={TestIds.HOME_ID}>
      <SearchBar />
      <Cards />
    </section>
  );
}
