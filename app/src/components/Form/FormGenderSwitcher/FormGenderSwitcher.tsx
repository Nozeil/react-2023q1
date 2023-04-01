import { InputTypes } from '../Form.enums';
import { FormGenderSwitcherProps } from './Form.types';
import { TestIds } from './../Form.enums';
import { forwardRef } from 'react';

const FormGenderSwitcher = forwardRef<HTMLInputElement, FormGenderSwitcherProps>(
  ({ cl, name, onChange }, ref) => (
    <label className={cl.rowLabel}>
      Male{' '}
      <div className={cl.switcher}>
        <input
          type={InputTypes.checkbox}
          name={name}
          className={cl.gender}
          ref={ref}
          onChange={onChange}
          data-testid={TestIds.gender}
        />{' '}
        <div className={cl.indicator} />
      </div>
      Female
    </label>
  )
);

export default FormGenderSwitcher;
