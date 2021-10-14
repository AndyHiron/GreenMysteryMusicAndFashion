import { FieldError } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import { BeforeAfterModifier } from 'react-day-picker';

export type FormFieldProps = {
  name: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  direction?: 'horizontal' | 'vertical';
  error?: FieldError;
  margin?: string;
};

export type InputTypes = 'password' | 'text' | 'textarea' | 'input';

export type DefaultInputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  defaultValue?: string;
  name: string;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  autoFocus?: boolean;
  placeholder?: string;
  iconPosition?: 'left' | 'right';
  handleIconClick?: () => void;
  type?: InputTypes;
  width?: string;
  value?: string;
};

export type DefaultDateProps = {
  disabledDays?: BeforeAfterModifier & Record<string, Date>,
};

export type DateRangeState = {
  from: Date;
  to: Date;
};

export type DateModifiers = {
  disabled?: boolean;
  outside?: boolean;
};

export type CalculateDatesType = 'day' | 'week' | 'month' | 'year';

export type DateType = string | Date | Dayjs;

export type DateRangeType = {
  from: DateType;
  to: DateType;
};

export type InputProps =
  DefaultInputProps
  & FormFieldProps;
