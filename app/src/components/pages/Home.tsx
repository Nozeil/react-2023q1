import { TestIds } from '@/enums';
import { Component } from 'react';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../SearchBar/SearchBar';

export class Home extends Component {
  render() {
    return (
      <section data-testid={TestIds.HOME_ID}>
        <SearchBar />
        <Cards />
      </section>
    );
  }
}
