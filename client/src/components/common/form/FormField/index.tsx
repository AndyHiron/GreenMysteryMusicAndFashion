import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { Label } from '../Label';
import { FormFieldsWrapper, FormFieldDescription } from './styled';

export const FormField: React.FC<FormFieldProps> = ({
  children, label, name, error, direction = 'vertical', description, margin,
}) => {
  return (
    <FormFieldsWrapper {...{ direction, margin }}>
      {label && (
        <Label htmlFor={name}>
          {label}
        </Label>
      )}
      {children}
      {(error || description) && (
        <FormFieldDescription isError={!!error}>
          {error?.message || description || 'Dit veld is verplicht'}
        </FormFieldDescription>
      )}
    </FormFieldsWrapper>
  );
};

export type FormFieldProps = {
  name: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  margin?: string;
  direction?: 'horizontal' | 'vertical';
  error?: FieldError;
};
