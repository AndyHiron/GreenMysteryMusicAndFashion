import { removeAuthenticationTokens } from 'hooks/useAuthentication';

import config from './config';

const redirect = (): void => {
  window.location.href = config.loginPath;
};

export const redirectToLogin = () => {
  removeAuthenticationTokens();
  redirect();
};
