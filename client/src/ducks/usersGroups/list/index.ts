import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

import { errorAction, getPaginationQuery } from 'services';

export const actions = {
  getUsersGroups: () => action('usersGroupslist/GET'),
  getUsersGroupsSuccess: (payload: i.GetUsersGroupsData) => action('usersGroupslist/GET_SUCCESS', payload),
  getUsersGroupsFailed: errorAction('usersGroupslist/GET_FAILED'),
};

const initialState: i.UsersGroupsState = {
  data: [],
  pagination: {
    offset: 0,
    limit: 0,
    total: 0,
  },
  error: {
    message: undefined,
  },
  loading: {
    get: undefined,
  },
};

export default (state = initialState, action: ActionType<typeof actions>): i.UsersGroupsState => {
  switch (action.type) {
    case 'usersGroupslist/GET':
      return {
        ...state,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          get: true,
        },
      };
    case 'usersGroupslist/GET_SUCCESS':
      return {
        ...state,
        data: action.payload.result,
        pagination: action.payload.pagination,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          get: false,
        },
      };
    case 'usersGroupslist/GET_FAILED':
      return {
        ...state,
        loading: {
          ...state.loading,
          get: false,
        },
        error: {
          message: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getUsersGroups: i.GetUsersGroups = (payload) => (dispatch, getState, api) => (
  new Promise((resolve, reject) => {
    dispatch(actions.getUsersGroups());

    const query: i.GetUsersGroupsQuery = { ...getPaginationQuery(payload.page, payload.limit) };

    if (payload.search) query.search = payload.search;

    api.get({
      path: '/dashboard/users/groups',
      query,
    })
      .then((data: i.GetUsersGroupsData) => {
        dispatch(actions.getUsersGroupsSuccess(data));
        resolve(data);
      })
      .catch((error: i.ApiError) => {
        dispatch(actions.getUsersGroupsFailed(error.message));
        reject(error);
      });
  })
);
