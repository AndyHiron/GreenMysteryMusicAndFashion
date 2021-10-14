import React from 'react';
import { toast } from 'react-toastify';

import { useAuthenticationActions, useAuthenticationUser } from 'hooks/useAuthentication';
import { SimplePage, Card } from 'common/layout';
import { Heading } from 'common/typography';
import { FormContainer, Input } from 'common/form';
import { Button } from 'common/interaction';
import { validation } from 'services/validation';

const ResetPassword: React.FC = () => {
  const { requestResetPassword } = useAuthenticationActions();
  const { loading } = useAuthenticationUser();

  const onSubmit = (data: ResetPasswordFormValues) => {
    if (loading) return;

    requestResetPassword(data.email)
      .then(() => {
        toast.success('Click the link in the email to set a new password.');
      });
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">Reset your password</Heading>
          <FormContainer<ResetPasswordFormValues> {...{ onSubmit }}>
            {({ register, formState: { errors } }) => (
              <>
                <Input
                  label="Email address"
                  error={errors?.email}
                  {...register('email', { ...validation.required, ...validation.email })}
                />
                <Button type="submit" disabled={loading} isLoading={loading}>
                  Reset
                </Button>
              </>
            )}
          </FormContainer>
        </Card>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

type ResetPasswordFormValues = {
  email: string;
};

export default ResetPassword;
