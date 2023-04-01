import FormCard from '../FormCard/FormCard';
import { FormCardListPropsI } from './FormCardList.interfaces';
import { TestIds } from './../Form.enums';

const FormCardList = ({ cards }: FormCardListPropsI) => (
  <div data-testid={TestIds.formCardList}>
    {cards.map((card) => (
      <FormCard data={card.data} key={card.id} />
    ))}
  </div>
);

export default FormCardList;
