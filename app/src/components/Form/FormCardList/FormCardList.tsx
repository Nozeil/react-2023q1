import cl from './FormCardList.module.css';

import FormCard from '../FormCard/FormCard';
import { FormCardListPropsI } from './FormCardList.interfaces';
import { TestIds } from '../Form.enums';
import { Component } from 'react';

class FormCardList extends Component<FormCardListPropsI> {
  render() {
    return (
      <div className={cl['card-list']} data-testid={TestIds.formCardList}>
        {this.props.cards.map((card) => (
          <FormCard data={card.data} key={card.id} />
        ))}
      </div>
    );
  }
}

export default FormCardList;
