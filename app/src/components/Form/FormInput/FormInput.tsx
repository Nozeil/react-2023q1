import { Component, forwardRef } from 'react';
import { TestIds } from '../Form.enums';
import { FormInputPropsI, FormInputForwradRefPropsI } from './FormInput.interfaces';

class FormInput extends Component<FormInputPropsI> {
  render() {
    const {
      innerRef: ref,
      cl,
      errorMessage,
      labelText,
      labelDirection,
      inputType,
      inputName,
    } = this.props;
    return (
      <label className={`${labelDirection} ${errorMessage && cl.errorField}`}>
        {labelText}{' '}
        <input
          type={inputType}
          name={inputName}
          className={cl.field}
          ref={ref}
          data-testid={inputName}
        />
        {errorMessage && (
          <div className={cl.errorMessage} data-testid={TestIds.error}>
            {errorMessage}
          </div>
        )}
      </label>
    );
  }
}

export default forwardRef<HTMLInputElement, FormInputForwradRefPropsI>((props, ref) => (
  <FormInput innerRef={ref} {...props} />
));
