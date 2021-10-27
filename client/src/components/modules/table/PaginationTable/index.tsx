import * as i from 'types';
import * as React from 'react';
import {
  Cell,
  HeaderGroup,
  Row,
  TableOptions,
  useExpanded,
  usePagination,
  useTable,
} from 'react-table';

import { Pagination } from 'common/interaction';
import { EmptyState, Loading } from 'common/general';
import { TableWrapper, TableCell, TableHeadCell, TableHeadIcon } from 'common/table';
import { useQueryParams } from 'hooks';

import {
  PaginationContainer,
  PaginationTableBody,
  PaginationTableContainer,
  PaginationTableRow,
} from './styled';

export const PaginationTable = <RowData extends object = {}> ({
  pagination, columns, data = [], sortableColumns, onRowClick, isLoading, isExpandable,
  isSelectable, onFetchData,
}: i.PaginationTableProps<RowData>) => {
  const { queryParams, setQueryParams } = useQueryParams();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize, expanded },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10},
    },
    useExpanded,
    usePagination,
  )

  console.log(page, 'page')

  const onToggleSortedColumn = (order: string) => () => {
    if (onFetchData) {
      onFetchData({
        ...queryParams,
        order,
      });
    }

    delete queryParams.page;
    setQueryParams({ ...queryParams, order });
  };

  React.useEffect(() => {
    if (onFetchData) {
      onFetchData({ ...queryParams });
    }
  }, [queryParams]);

  return (
    <PaginationContainer>
      <PaginationTableContainer>
        <TableWrapper {...getTableProps()}>
          {headerGroups.map((headerGroup: HeaderGroup<RowData>) => (
            <PaginationTableRow
              {...headerGroup.getHeaderGroupProps()}
              isHeaderRow
            >
              {headerGroup.headers.map((column: HeaderGroup<RowData>) => {
                const isSortableColumn = Boolean(sortableColumns?.includes(column.id));
                const isSorted = Boolean(queryParams.order?.includes(column.id));
                const sortColumn = queryParams.order
                  ? queryParams.order?.includes('-') ? column.id : `-${column.id}`
                  : column.id;

                return (
                  <TableHeadCell
                    {...column.getHeaderProps()}
                    {...(isSortableColumn && {
                      onClick: onToggleSortedColumn(sortColumn),
                    })}
                    isClickable={isSortableColumn}
                    flex={column.flex}
                    fixedWidth={column.fixedWidth}
                    isActionColumn={column.id === 'actions'}
                  >
                    {column.render('Header')}
                    {isSorted && <TableHeadIcon pointUp={queryParams.order.includes('-')} />}
                  </TableHeadCell>
                );
              })}
            </PaginationTableRow>
          ))}
          <PaginationTableBody {...getTableBodyProps()}>
            {isLoading === true && (
              <Loading />
            )}
            {isLoading === false && (
              <>
                {data.length ? (
                  page?.map((row: Row<RowData>) => {
                    prepareRow(row);

                    console.log(row, 'cell')

                    return (
                      <PaginationTableRow
                        {...row.getRowProps()}
                        {...{
                          ...{ isSelectable },
                          ...(!isExpandable && onRowClick && {
                            isClickable: true,
                            onClick: () => onRowClick(row.original),
                          }),
                          ...(isExpandable && {
                            expanded: Object.keys(expanded).includes(row.index.toString())
                              || row.depth > 0,
                            depth: row.depth,
                          }),
                        }}
                      >
                        {row.cells.map((cell: Cell<RowData>) => {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              flex={cell.column.flex}
                              fixedWidth={cell.column.fixedWidth}
                              isActionColumn={cell.column.id === 'actions'}
                            >
                              {cell.render('Cell')}
                            </TableCell>
                          );
                        })}
                      </PaginationTableRow>
                    );
                  })
                ) : (
                  <EmptyState text="No results" />
                )}
              </>
            )}
          </PaginationTableBody>
        </TableWrapper>
      </PaginationTableContainer>

      {isLoading === false && (
        <Pagination {...{ pagination, onFetchData, gotoPage, previousPage, nextPage, pageIndex }} />
      )}
    </PaginationContainer>
  );
};
