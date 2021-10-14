import * as i from 'types';

export type UserData = i.User | undefined;

export type UserState = i.BaseState<i.UserData>;
export type GetUserData = i.User;

export type User = {
  account_status: i.UserAccountStatus;
  created: string;
  date_joined: string;
  email: string;
  first_name: string;
  groups: i.UsersGroup[];
  id: string;
  is_active: boolean;
  last_login?: string;
  last_name: string;
  last_updated: string;
  url: string;
};

export type UserAccountStatus = 'FORCE_CHANGE_PASSWORD' | 'CONFIRMED' | 'UNCONFIRMED';

export type GetUser = i.BaseThunkAction<(id: string) => Promise<void>>;

export type UpsertUser = i.BaseThunkAction<(
  values: UpsertUserEditFormValues,
  userId?: string,
) => Promise<i.User>>;

export type UpsertUserEditFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  groups: i.SelectValue[];
};

export type ActivateUser = i.BaseThunkAction<(
  id: string,
  action?: 'activate' | 'deactivate',
) => Promise<void>>;
