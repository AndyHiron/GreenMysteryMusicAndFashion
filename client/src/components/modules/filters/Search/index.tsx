import React from 'react';

import { Input } from 'common/form';
import { Button } from 'common/interaction';
import { SearchIcon } from 'common/icon';
import { useQueryParams } from 'hooks';

import { SearchForm } from './styled';

export const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [value, setValue] = React.useState(queryParams.search || '');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    delete queryParams.page;

    setQueryParams({ ...queryParams, search: value });
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        name="search"
        label="Search"
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          setValue(e.target.value)}
      />
      <Button
        variant="secondary"
        type="submit"
        icon={<SearchIcon />}
        iconPosition="right"
      >
        Search
      </Button>
    </SearchForm>
  );
};

type SearchProps = {
  placeholder?: string;
};
