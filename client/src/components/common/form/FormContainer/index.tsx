import * as React from 'react';
import {
  useForm, UseFormReturn, SubmitHandler, UnpackNestedValue, DeepPartial, FormProvider,
} from 'react-hook-form';

import { StyledFormContainer } from './styled';

export const FormContainer = <TFormValues extends Record<string, any> = Record<string, any>>({
  children, id, onSubmit, defaultValues, mode = 'onSubmit',
}: FormContainerProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    mode,
    defaultValues,
  });

  return (
    <StyledFormContainer
      id={id}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <FormProvider {...methods}>
        {children(methods)}
      </FormProvider>
    </StyledFormContainer>
  );
};

export type FormContainerProps<TFormValues> = {
  defaultValues?: UnpackNestedValue<DeepPartial<TFormValues>>;
  id?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  mode?: 'onSubmit' | 'onChange';
};
