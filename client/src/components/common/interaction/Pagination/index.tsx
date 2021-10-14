import * as i from 'types';
import * as React from 'react';

import { useQueryParams } from 'hooks';
import ArrowLeftIcon from 'vectors/arrow-left.svg';
import ArrowRightIcon from 'vectors/arrow-right.svg';

import { PaginationContainer, PaginationButton } from './styled';

export const Pagination: React.FC<PaginationProps> = ({ pageIndex,pagination, gotoPage, previousPage, nextPage }) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const pageTotal = Math.ceil(pagination.total / pagination.limit);

  console.log(pageIndex, 'wtffff')
  if (pageTotal <= 1) return null;

  const currentPage = pageIndex + 1;

  const onPageChange = (page: number) => {
    console.log(page)
    gotoPage(page)
  };

  return (
    <PaginationContainer>
        <PaginationButton onClick={() => previousPage()}>
          <ArrowLeftIcon />
        </PaginationButton>
        <p>{pageIndex}</p>
        <PaginationButton onClick={() => nextPage()}>
          <ArrowRightIcon />
        </PaginationButton>
    </PaginationContainer>
  );
};

type PaginationProps = {
  pagination: i.Pagination;
  pageIndex?: any;
  gotoPage?:any;
  previousPage?: any;
  nextPage?: any;
};
