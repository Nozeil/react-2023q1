import FormCard from '../FormCard/FormCard';
import { FormCardListPropsI } from './FormCardList.interfaces';
import { TestIds } from './../Form.enums';
import cl from './../Form.module.css';

const FormCardList = ({ cards }: FormCardListPropsI) => (
  <div className={cl.cards} data-testid={TestIds.formCardList}>
    {cards.map((card) => (
      <FormCard data={card.data} key={card.id} />
    ))}
  </div>
);

export default FormCardList;
