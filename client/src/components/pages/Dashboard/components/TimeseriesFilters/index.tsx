import React from 'react';

import { FilterBar, Search } from 'modules/filters';

export const TimeseriesFilters: React.FC = () => {
  return (
    <FilterBar>
      <Search placeholder="Name, email" />
    </FilterBar>
  );
};
