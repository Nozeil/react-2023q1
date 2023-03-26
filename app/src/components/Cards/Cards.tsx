import { Component } from 'react';
import { Card } from '../Card/Card';
import { data } from '@/__mocks__/cardsData/cardsData';
import cl from './Cards.module.css';
import { TestIds } from '@/enums';

export class Cards extends Component {
  render() {
    return (
      <ul className={cl.list} data-testid={TestIds.CARDS_LIST_ID}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}
