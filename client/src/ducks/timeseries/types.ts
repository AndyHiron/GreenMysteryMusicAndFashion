import * as i from 'types';

export type TimeseriesData = i.Timseries[];

export type TimeseriesState = i.BaseState<i.TimeseriesData>;
export type GetTimeseriesData = TimeseriesData

export type Timseries = {
  Identifier: string;
  ReferenceDate: string[];
  Value: number[];
};

export type GetTimeseries = i.BaseThunkAction<(payload: GetTimeseriesPayload) => Promise<i.GetTimeseriesData>>;
export type GetTimeseriesPayload = i.PaginationPayload & {
  search?: string;
};
