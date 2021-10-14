import * as i from 'types';

export const selectUsersData = (state: i.ReduxState) => state.users.data || [];
export const selectUsersPagination = (state: i.ReduxState) => state.users.pagination;
export const selectUsersError = (state: i.ReduxState) => state.users.error;
export const selectUsersLoading = (state: i.ReduxState) => state.users.loading;
