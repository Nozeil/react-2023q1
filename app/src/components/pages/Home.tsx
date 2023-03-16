import { Component } from 'react';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../SearchBar/SearchBar';

export class Home extends Component {
  render() {
    return (
      <section>
        <SearchBar />
        <Cards />
      </section>
    );
  }
}
