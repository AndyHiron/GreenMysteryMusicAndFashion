import React from 'react';

import { FilterBar, Search } from 'modules/filters';

export const UserManagementOverviewFilters: React.FC = () => {
  return (
    <FilterBar>
      <Search placeholder="Name, email" />
    </FilterBar>
  );
};
