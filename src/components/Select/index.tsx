import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './style';

interface SelectInputProps extends SelectProps<OptionTypeBase> {
  name: string;
}

export interface Option {
  value: string;
  label: string;
}

const SelectCityState: React.FC<SelectInputProps> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (ref.state.value) return [];

          return ref.state.value.map((option: Option) => option.value);
        }

        if (!ref.state.value) return '';

        return ref.state.value.value;
      },
      setValue: (ref: ReactSelect, value: Option) => {
        ref.select.setValue(value, 'select-option');
      },
      clearValue: (ref: ReactSelect) => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container isErrored={!!error}>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default SelectCityState;
