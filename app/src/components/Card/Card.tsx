import { TestIds } from '@/enums';
import { DataItem } from '@/__mocks__/cardsData/types';
import cl from './Card.module.css';

export function Card({ src, title, subtitle, price, about }: DataItem) {
  return (
    <li className={cl.item} data-testid={TestIds.CARD_ID}>
      <img className={cl.img} src={src} alt={`${title}-image`} />
      <div className={cl.content}>
        <h3 className={cl.title}>{title}</h3>
        <h4 className={cl.subtitle}>{subtitle}</h4>
        <p className={cl.price}>{price}</p>
        <p className={cl.about}>{about}</p>
      </div>
    </li>
  );
}
