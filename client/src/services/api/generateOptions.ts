import * as i from 'types';
import qs from 'qs';

import config from './config';

export const generateOptions: i.GenerateOptions = ({
  method, path, query, body, file = false, json = true, upload = false,
  error, type = config.defaultApi, withAuth = config.defaultWithAuth,
}) => {
  if (!upload && body) body = JSON.stringify(body);
  const apiUrl = config.apiUrls[type];

  return {
    path: `${apiUrl}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
    options: {
      headers: {
        ...!upload ? { 'Content-Type': 'application/json' } : {},
      },
      method,
      ...(body ? { body } : {}),
    },
    file,
    json,
    errorConfig: error,
    withAuth,
  };
};
