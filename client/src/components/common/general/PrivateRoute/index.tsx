import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthenticationUser, AuthenticationRouteProps } from 'hooks/useAuthentication';

export const PrivateRoute: React.FC<AuthenticationRouteProps> = ({
  component: Component, ...otherProps
}) => {
  const { determined, authenticated } = useAuthenticationUser();
  if (!determined) return null;

  return (
    <Route {...otherProps} render={(props) => (
      authenticated
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};
