import * as i from 'types';

export type UsersData = i.User[];
export type UsersPagination = {
  pagination: i.Pagination;
};

export type UsersState = i.BaseState<i.UsersData> & UsersPagination;
export type GetUsersData = {
  result: UsersData;
} & UsersPagination;

export type GetUsers = i.BaseThunkAction<(payload: GetUsersPayload) => Promise<i.GetUsersData>>;
export type GetUsersPayload = i.PaginationPayload & {
  search?: string;
};
export type GetUsersQuery = i.PaginationQuery & {
  search?: string;
};
