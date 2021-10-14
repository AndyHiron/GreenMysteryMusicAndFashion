import * as i from 'types';
import React from 'react';

import { TableTextCell } from 'common/table';

const tableHeader = (): i.TableHeaderType[] => {
  return [
    {
      Header: 'Timestamp',
      accessor: 'timestamp',
      Cell: ({ row }) => (
        <TableTextCell label="Timestamp">
          {row.original.timestamp}
        </TableTextCell>
      ),
    },
    {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ row }) => (
          <TableTextCell label="Value">
            {row.original.value}
          </TableTextCell>
        ),
      },
  ];
};

export default tableHeader;
