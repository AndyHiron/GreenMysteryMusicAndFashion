import React from 'react';
import qs from 'qs';
import { useHistory, useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const history = useHistory();
  const location = useLocation();

  const getQueryParams: UseQueryParamsReturnType = React.useMemo(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

    return queryParams;
  }, [location.search]);

  const setQueryParams = (params: UseSetQueryParamsProps) => {
    // remove empty queries
    Object.keys(params).forEach((key) => params[key] === '' && delete params[key]);

    const search = qs.stringify(params);

    history.replace({ search });
  };

  return {
    queryParams: getQueryParams,
    setQueryParams,
  };
};

type UseQueryParamsReturnType = {
  [key: string]: any;
};

type UseSetQueryParamsProps = {
  [key: string]: string | number;
};
