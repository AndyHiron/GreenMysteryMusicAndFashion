import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuthenticationActions, useAuthenticationUser } from 'hooks/useAuthentication';
import { SimplePage, Card } from 'common/layout';
import { FormContainer, Input, InputPassword } from 'common/form';
import { Button } from 'common/interaction';
import { Heading } from 'common/typography';
import { validation } from 'services/validation';

import { ActionsContainer } from './styled';

const Login: React.FC = () => {
  const history = useHistory();
  const { login } = useAuthenticationActions();
  const { loading } = useAuthenticationUser();

  const onSubmit = (data: LoginFormValues) => {
    login(data.email, data.password).then(() => {
      toast.success('Successfully logged in!');
      history.push('/');
    });
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">Log in</Heading>
          <FormContainer<LoginFormValues> {...{ onSubmit }}>
            {({ register, formState: { errors } }) => (
              <>
                <Input
                  label="Email address"
                  error={errors?.email}
                  {...register('email', { ...validation.required, ...validation.email })}
                />
                <InputPassword
                  label="Password"
                  error={errors?.password}
                  {...register('password', { ...validation.required })}
                />
                <ActionsContainer>
                  <Button type="submit" disabled={loading} isLoading={loading}>
                    Log in
                  </Button>
                  <Link to="/reset-password">
                    Forgot password?
                  </Link>
                </ActionsContainer>
              </>
            )}
          </FormContainer>
        </Card>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

type LoginFormValues = {
  email: string;
  password: string;
};

export default Login;
