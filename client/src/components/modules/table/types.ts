import * as i from 'types';

export type PaginationTableProps<RowData extends object> = {
  columns: i.TableHeaderType[];
  data?: RowData[];
  isExpandable?: boolean;
  isLoading?: boolean;
  isSelectable?: boolean;
  onFetchData?: i.FetchPaginationData;
  onRowClick?: (row: RowData) => void;
  pagination: i.Pagination;
  sortableColumns?: string[];
};

export type FetchPaginationData = (query: {
  [key: string]: string | number;
}) => void;
