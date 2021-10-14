import * as i from 'types';
import { redirectToLogin } from './redirectToLogin';
import config from './config';

/**
 * Handle api status codes
 * Return true to exit the request
 */
export const handleStatusCodes: i.HandleStatusCodes = (code) => {
  switch (code) {
    case 204:
      return true;
    case 401:
      redirectToLogin();
      return true;
    case 403:
      window.location.href = config.notFoundPath;
      return true;
    default:
      return false;
  }
};
