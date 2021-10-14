import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuthenticationActions, useAuthenticationUser } from 'hooks/useAuthentication';
import { SimplePage, Card } from 'common/layout';
import { Heading } from 'common/typography';
import { FormContainer, InputPassword } from 'common/form';
import { Button } from 'common/interaction';
import { validation } from 'services/validation';

import { PasswordRequirements } from './styled';

const ConfirmPassword: React.FC = () => {
  const history = useHistory();
  const { confirmResetPassword } = useAuthenticationActions();
  const { loading } = useAuthenticationUser();

  const onSubmit = (data: ConfirmPasswordFormValues) => {
    if (loading) return;

    confirmResetPassword(data.password)
      .then(() => {
        toast.success('Your password has been reset.');
        history.push('/login');
      });
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">Set a new password</Heading>
          <FormContainer<ConfirmPasswordFormValues> {...{ onSubmit }}>
            {({ register, formState: { errors } }) => (
              <>
                <InputPassword
                  label="Password"
                  error={errors?.password}
                  {...register('password', { ...validation.required, ...validation.password })}
                />
                <PasswordRequirements>
                  <span>—&nbsp;&nbsp;At least 8 characters</span>
                  <span>—&nbsp;&nbsp;At least 1 lowercase letter</span>
                  <span>—&nbsp;&nbsp;At least 1 capital</span>
                  <span>—&nbsp;&nbsp;At least 1 number</span>
                  <span>—&nbsp;&nbsp;At least 1 special character</span>
                </PasswordRequirements>
                <Button type="submit" disabled={loading} isLoading={loading}>
                  Save
                </Button>
              </>
            )}
          </FormContainer>
        </Card>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

type ConfirmPasswordFormValues = {
  password: string;
};

export default ConfirmPassword;
