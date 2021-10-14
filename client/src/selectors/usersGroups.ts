import * as i from 'types';

export const selectUsersGroupsData = (state: i.ReduxState) => state.usersGroups.data || [];
export const selectUsersGroupsError = (state: i.ReduxState) => state.usersGroups.error;
export const selectUsersGroupsLoading = (state: i.ReduxState) => state.usersGroups.loading;
export const selectUsersGroupsDataForSelect = (state: i.ReduxState) => (
  state.usersGroups.data && state.usersGroups.data.length > 0
    ? state.usersGroups.data.map((group) => ({
      label: group.name,
      value: group.id,
    }))
    : []
);
