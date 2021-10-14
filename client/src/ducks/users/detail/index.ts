import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

import { errorAction } from 'services';

export const actions = {
  getUser: () => action('users/detail/GET'),
  getUserSuccess: (payload: i.GetUserData) => action('users/detail/GET_SUCCESS', payload),
  getUserFailed: errorAction('users/detail/GET_FAILED'),

  upsertUser: () => action('users/detail/UPSERT'),
  upsertUserSuccess: (payload: i.User) => action('users/detail/UPSERT_SUCCESS', payload),
  upsertUserFailed: errorAction('users/detail/UPSERT_FAILED'),

  activateUser: () => action('users/detail/ACTIVATE'),
  activateUserSuccess: (payload: boolean) => action('users/detail/ACTIVATE_SUCCESS', payload),
  activateUserFailed: errorAction('users/detail/ACTIVATE_FAILED'),

  resetUserDetail: () => action('users/detail/RESET'),
};

const initialState: i.UserState = {
  data: undefined,
  error: {
    message: undefined,
  },
  loading: {
    activate: undefined,
    get: undefined,
    upsert: undefined,
  },
};

export default (state = initialState, action: ActionType<typeof actions>): i.UserState => {
  switch (action.type) {
    case 'users/detail/GET':
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
    case 'users/detail/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          get: false,
        },
      };
    case 'users/detail/GET_FAILED':
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
    case 'users/detail/UPSERT':
      return {
        ...state,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          upsert: true,
        },
      };
    case 'users/detail/UPSERT_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          upsert: false,
        },
      };
    case 'users/detail/UPSERT_FAILED':
      return {
        ...state,
        loading: {
          ...state.loading,
          upsert: false,
        },
        error: {
          message: action.payload,
        },
      };
    case 'users/detail/ACTIVATE':
      return {
        ...state,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          activate: true,
        },
      };
    case 'users/detail/ACTIVATE_SUCCESS':
      return {
        ...state,
        data: {
          ...state.data,
          is_active: action.payload,
        } as i.UserData,
        error: {
          message: undefined,
        },
        loading: {
          ...state.loading,
          activate: false,
        },
      };
    case 'users/detail/ACTIVATE_FAILED':
      return {
        ...state,
        loading: {
          ...state.loading,
          activate: false,
        },
        error: {
          message: action.payload,
        },
      };
    case 'users/detail/RESET':
      return initialState;
    default:
      return state;
  }
};

export const getUser: i.GetUser = (id) => (dispatch, getState, api) => (
  new Promise((resolve, reject) => {
    dispatch(actions.getUser());

    api.get({
      path: `/dashboard/users/users/${id}`,
    })
      .then((data: i.GetUserData) => {
        dispatch(actions.getUserSuccess(data));
        resolve();
      })
      .catch((error: i.ApiError) => {
        dispatch(actions.getUserFailed(error.message));
        reject(error);
      });
  })
);

export const upsertUser: i.UpsertUser = (values, userId) => (dispatch, getState, api) => (
  new Promise((resolve, reject) => {
    dispatch(actions.upsertUser());

    const body = {
      ...values,
      groups: values.groups?.map((group) => String(group.value)) || [],
    };

    api[userId ? 'patch' : 'post']({
      path: `/dashboard/users/users${userId ? `/${userId}` : ''}`,
      body,
    })
      .then((response: i.User) => {
        dispatch(actions.upsertUserSuccess(response));
        resolve(response);
      })
      .catch((error: i.ApiError) => {
        dispatch(actions.upsertUserFailed(error.message));
        reject(error);
      });
  })
);

export const activateUser: i.ActivateUser = (
  id, action = 'activate',
) => (dispatch, getState, api) => (
  new Promise((resolve, reject) => {
    dispatch(actions.activateUser());

    api.post({
      path: `/dashboard/users/users/${id}/${action}`,
    })
      .then((user: i.User) => {
        dispatch(actions.activateUserSuccess(user?.is_active));
        resolve();
      })
      .catch((error: i.ApiError) => {
        dispatch(actions.activateUserFailed(error.message));
        reject(error);
      });
  })
);
