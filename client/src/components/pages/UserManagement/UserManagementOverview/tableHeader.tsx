import * as i from 'types';
import React from 'react';

import { StatusLabel } from 'common/general';
import { TableActions, TableTextCell } from 'common/table';
import { translateAccountStatus, translateUserIsActive } from 'services';
import ArrowRightIcon from 'vectors/arrow-right.svg';

const tableHeader = (): i.TableHeaderType[] => {
  return [
    {
      Header: 'Full name',
      accessor: 'full_name',
      Cell: ({ row }) => (
        <TableTextCell label="Full name">
          {row.original.first_name} {row.original.last_name}
        </TableTextCell>
      ),
    },
    {
      Header: 'E-mail',
      accessor: 'email',
      Cell: ({ row }) => (
        <TableTextCell label="E-mail">
          {row.original.email}
        </TableTextCell>
      ),
    },
    {
      Header: 'Account status',
      accessor: 'account_status',
      Cell: ({ row }) => (
        <TableTextCell label="Account status">
          {translateAccountStatus[row.original.account_status as i.UserAccountStatus]}
        </TableTextCell>
      ),
    },
    {
      Header: 'Is active',
      accessor: 'is_active',
      Cell: ({ row }) => {
        const status = translateUserIsActive(row.original.is_active);

        return (
          <TableTextCell label="Is active">
            <StatusLabel variant={status?.variant}>
              {status?.label}
            </StatusLabel>
          </TableTextCell>
        );
      },
    },
    {
      Header: '',
      accessor: 'actions',
      Cell: () => (
        <TableActions>
          <ArrowRightIcon />
        </TableActions>
      ),
    },
  ];
};

export default tableHeader;
