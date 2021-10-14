import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input, SelectDropdown } from 'common/form';
import { Row } from 'common/layout';
import { Heading } from 'common/typography';
import { getUsersGroups } from 'ducks/usersGroups/list';
import { useDispatch, useSelector } from 'hooks';
import { selectUsersGroupsDataForSelect } from 'selectors/usersGroups';
import { validation } from 'services';

const UserManagementEditForm: React.FC = () => {
  const { control, register, formState: { errors } } = useFormContext();
  const dispatch = useDispatch();
  const usersGroups = useSelector(selectUsersGroupsDataForSelect);

  React.useEffect(() => {
    dispatch(getUsersGroups({
      page: 0,
      limit: 999,
    }));
  }, []);

  return (
    <>
      <Heading as="h1" margin="0 0 24px">Personal information</Heading>
      <Row>
        <Input
          label="First name"
          error={errors?.first_name}
          {...register('first_name', { ...validation.required })}
        />
        <Input
          label="Last name"
          error={errors?.last_name}
          {...register('last_name', { ...validation.required })}
        />
      </Row>
      <Row rowWidth="third">
        <Input
          label="E-mail"
          error={errors?.email}
          {...register('email', { ...validation.required, ...validation.email })}
        />
      </Row>
      <Heading as="h1" margin="16px 0 24px">Groups</Heading>
      <Row>
        <Controller
          control={control}
          name="groups"
          render={({ field }) => (
            <SelectDropdown
              {...field}
              options={usersGroups}
              placeholder="Select"
              label="Group name"
              description="Optional"
              isMulti
              error={errors?.groups}
            />
          )}
        />
      </Row>
    </>
  );
};

export default UserManagementEditForm;
