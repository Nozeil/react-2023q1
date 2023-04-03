import { Card } from '../Card/Card';
import { data } from '@/__mocks__/cardsData/cardsData';
import cl from './Cards.module.css';
import { TestIds } from '@/enums';

export function Cards() {
  return (
    <ul className={cl.list} data-testid={TestIds.CARDS_LIST_ID}>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ul>
  );
}
