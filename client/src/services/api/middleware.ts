import * as i from 'types';

import { getAuthenticationToken } from 'hooks/useAuthentication';

import { redirectToLogin } from './redirectToLogin';

export const authMiddleware: i.Middleware = (next) => async (requestOptions) => {
  requestOptions.options.headers = {
    'x-functions-key': `318N9rUYKjciv3xdGLga1YRc87kYEjUmqxRcDhNqK38djgOnfUxbWg==`,
  };
  next(requestOptions);

  /*
  if (requestOptions.withAuth) {
    await getAuthenticationToken()
      .then((token) => {
        requestOptions.options.headers = {
          ...requestOptions.options.headers,
          'Authorization': `Bearer ${token}`,
        };
      })
      .catch(() => {
        redirectToLogin();
      });
  }

  next(requestOptions);
   */
};
