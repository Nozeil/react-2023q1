import FormCard from '../FormCard/FormCard';
import { FormCardListPropsI } from './FormCardList.interfaces';
import { TestIds } from './../Form.enums';
import cl from './FormCardList.styles.module.css';

const FormCardList = ({ cards }: FormCardListPropsI) => (
  <div data-testid={TestIds.formCardList} className={cl.list}>
    {cards.map((card) => (
      <FormCard data={card.data} key={card.id} />
    ))}
  </div>
);

export default FormCardList;
