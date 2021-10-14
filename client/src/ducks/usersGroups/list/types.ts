import * as i from 'types';

export type UsersGroupsData = i.UsersGroup[];
export type UsersGroupsPagination = {
  pagination: i.Pagination;
};

export type UsersGroupsState = i.BaseState<i.UsersGroupsData> & UsersGroupsPagination;
export type GetUsersGroupsData = {
  result: UsersGroupsData;
} & UsersGroupsPagination;

export type UsersGroup = {
  id: number;
  name: string;
};

export type GetUsersGroups = i.BaseThunkAction<(payload: GetUsersGroupsPayload) => Promise<i.GetUsersGroupsData>>;
export type GetUsersGroupsPayload = i.PaginationPayload & {
  search?: string;
};
export type GetUsersGroupsQuery = i.PaginationQuery & {
  search?: string;
};
