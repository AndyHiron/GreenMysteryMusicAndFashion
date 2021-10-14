import * as i from 'types';
import { OptionsType, OptionTypeBase } from 'react-select';

export type SelectValue = {
  label: string;
  value: React.ReactText;
};

// discrimination types
type AsyncSelectProps = {
  isAsync: true;
  loadOptions: (
    keyword: string,
    callback: (options: OptionsType<OptionTypeBase>) => void,
    addressGroup?: string
  ) => Promise<SelectValue[]>;
  options?: never;
} & (MultiSelectProps | SingleSelectProps);

type SyncSelectProps = {
  isAsync?: false;
  loadOptions?: never;
  options: SelectValue[];
} & (MultiSelectProps | SingleSelectProps);

type MultiSelectProps = {
  isMulti: true;
  onChange?: (selectedOption: SelectValue[]) => void;
};

type SingleSelectProps = {
  isMulti?: false;
  onChange?: (selectedOption: SelectValue) => void;
};

type SelectProps = {
  components?: object;
  isCreatable?: boolean;
  isClearable?: boolean;
  additionalStyles?: object;
  isMulti?: boolean;
  isSearchable?: boolean;
  value?: SelectValue[] | SelectValue;
  placeholder?: string;
  onCreateOption?: ((selectedOption: SelectValue) => void);
  handleChange?: ((selectedOption: SelectValue[]) => void)
  | ((selectedOption: SelectValue) => void)
  | undefined;
  rules?: (ref:
  (HTMLSelectElement & HTMLTextAreaElement & HTMLInputElement)
  | (HTMLSelectElement & HTMLTextAreaElement & HTMLInputElement)
  | null
  ) => void;
};

export type BaseSelectProps = i.FormFieldProps & SelectProps & (
  | AsyncSelectProps
  | SyncSelectProps
);

export type SelectUnionTypeProps = SelectProps & (
  | AsyncSelectProps
  | SyncSelectProps
) & {
  styles: object;
};
