export type ReduxState = {
  project: any;
};

export type Pagination = {
  limit: number;
  offset: number;
  total: number;
};

export type PaginationPayload = {
  page?: number;
  limit?: number;
  offset?: number;
};
