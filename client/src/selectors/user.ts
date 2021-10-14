import * as i from 'types';

export const selectUserData = (state: i.ReduxState) => state.user.data || undefined;
export const selectUserError = (state: i.ReduxState) => state.user.error;
export const selectUserLoading = (state: i.ReduxState) => state.user.loading.get;
export const selectUserDataForForm = (state: i.ReduxState) => ({
  ...state.user.data,
  groups: state.user.data?.groups.map((group) => ({
    label: group.name,
    value: group.id,
  })),
});
