import * as i from 'types';
export * from './users/list/types';
export * from './users/detail/types';
export * from './usersGroups/list/types';
export * from './timeseries/types';

export type ReduxState = {
  users: i.UsersState;
  user: i.UserState;
  usersGroups: i.UsersGroupsState;
  timeseries: any;
};

export type Pagination = {
  limit: number;
  offset: number;
  total: number;
};

export type PaginationPayload = {
  page?: number;
  limit?: number;
  offset?: number;
};
