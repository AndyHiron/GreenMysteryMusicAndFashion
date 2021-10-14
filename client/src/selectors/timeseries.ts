import * as i from 'types';

export const selectTimeseriesDatetimes = (state: i.ReduxState) => state.user.data || [];
export const selectTimeseriesValues = (state: i.ReduxState) => state.user.error || [];
