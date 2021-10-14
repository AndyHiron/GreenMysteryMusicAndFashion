import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

import { errorAction } from 'services';

export const actions = {
  getTimeseries: () => action('timeseries/GET'),
  getTimeseriesSuccess: (payload: any) => action('timeseries/GET_SUCCESS', payload),
  getTimeseriesFailed: errorAction('timeseries/GET_FAILED'),
};

const initialState: any = {
  data: [],
  error: {
    message: undefined,
  },
  loading: {
    get: undefined,
  },
};

export default (state = initialState, action: any): any => {
  switch (action.type) {
    case 'timeseries/GET':
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
    case 'timeseries/GET_SUCCESS':
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
    case 'timeseries/GET_FAILED':
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

export const getTimeseries: any = (payload: any) => (dispatch: any, getState: any, api: any) => (
  new Promise((resolve, reject) => {
    dispatch(actions.getTimeseries());

    api.post({
      path: '/TimeSeries',
      body: {
          ...payload
      },
    })
      .then((data: any) => {
        dispatch(actions.getTimeseriesSuccess(data));
        resolve(data);
      })
      .catch((error: i.ApiError) => {
        dispatch(actions.getTimeseriesFailed(error.message));
        reject(error);
      });
  })
);
