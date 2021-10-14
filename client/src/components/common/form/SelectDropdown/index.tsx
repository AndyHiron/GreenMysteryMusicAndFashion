import React from 'react';
import CreatableReactSelect from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';

import CloseIcon from 'vectors/close.svg';

import { FormField } from '../FormField';
import customStyles from './customStyles';
import { BaseSelectProps, SelectUnionTypeProps, SelectValue } from './types';

const MultiValueRemove = (props: any) => (
  <components.MultiValueRemove {...props}>
    <CloseIcon />
  </components.MultiValueRemove>
);

export const SelectDropdown: React.FC<BaseSelectProps> = ({
  isAsync, isMulti, loadOptions, options, onChange, value, additionalStyles, isCreatable,
  isSearchable, placeholder, name, label, error, direction = 'vertical', description, handleChange,
  isClearable = true, onCreateOption,
}) => {
  const props = {
    components: { MultiValueRemove },
    isAsync,
    isClearable,
    isMulti,
    isSearchable,
    loadOptions,
    onChange: (value: SelectValue[] & SelectValue) => {
      if (handleChange) handleChange(value);
      if (onChange) onChange(value);
    },
    onCreateOption,
    options,
    placeholder,
    styles: {
      ...customStyles,
      ...additionalStyles,
    },
    value,
  } as SelectUnionTypeProps;

  const AsyncComponent = isCreatable ? AsyncCreatableSelect : AsyncSelect;
  const SelectComponent = isCreatable ? CreatableReactSelect : ReactSelect;
  return (
    <FormField {...{ name, label, error, direction, description }}>
      {isAsync && loadOptions ? (
        //@ts-ignore
        <AsyncComponent
          {...props}
          loadOptions={debounce((keyword, callback) => loadOptions(keyword, callback), 500)}
        />
      ) : (
        // @ts-ignore
        <SelectComponent {...props} />
      )}
    </FormField>
  );
};
