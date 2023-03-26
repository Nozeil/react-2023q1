import { FormCardPropsI } from './FormCard.interfaces';
import cl from './FormCard.module.css';
import { TestIds } from '../Form.enums';
import { Component } from 'react';

class FormCard extends Component<FormCardPropsI> {
  render() {
    const { name, surname, date, country, gender, file } = this.props.data;

    return (
      <div className={cl.card} data-testid={TestIds.formCard}>
        <img className={cl.card__image} src={URL.createObjectURL(file)} alt="user-image" />
        <ul className="list">
          <li className={cl['card__info-team']}>Name: {name}</li>
          <li className={cl['card__info-team']}>Surname: {surname}</li>
          <li className={cl['card__info-team']}>Birthday: {date}</li>
          <li className={cl['card__info-team']}>Country: {country}</li>
          <li className={cl['card__info-team']}>Gender: {gender}</li>
        </ul>
      </div>
    );
  }
}

export default FormCard;
