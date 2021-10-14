import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

import { errorAction, getPaginationQuery } from 'services';

export const actions = {
  getUsers: () => action('users/list/GET'),
  getUsersSuccess: (success: i.GetUsersData) => action('users/list/GET_SUCCESS', success),
  getUsersFailed: errorAction('users/list/GET_FAILED'),
};

const initialState: i.UsersState = {
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

export default (state = initialState, action: ActionType<typeof actions>): i.UsersState => {
  switch (action.type) {
    case 'users/list/GET':
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
    case 'users/list/GET_SUCCESS':
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
    case 'users/list/GET_FAILED':
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

export const getUsers: i.GetUsers = (payload) => (dispatch, getState, api) => (
  new Promise((resolve, reject) => {
    dispatch(actions.getUsers());

    const query: i.GetUsersQuery = { ...getPaginationQuery(payload.page, payload.limit) };

    if (payload.search) query.search = payload.search;

    api.get({
      path: '/dashboard/users/users',
      query,
    })
      .then((data: i.GetUsersData) => {
        dispatch(actions.getUsersSuccess(data));
        resolve(data);
      })
      .catch((error: i.ApiError) => {
        dispatch(actions.getUsersFailed(error.message));
        reject(error);
      });
  })
);
