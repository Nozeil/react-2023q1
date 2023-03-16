import { Component } from 'react';
import { Card } from '../Card/Card';
import { data } from '@/__mocks__/cardsData/cardsData';
import cl from './Cards.module.css';

export class Cards extends Component {
  render() {
    return (
      <ul className={cl.list}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}
