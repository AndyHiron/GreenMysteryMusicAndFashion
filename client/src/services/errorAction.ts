import { action } from 'typesafe-actions';

export const errorAction = <T extends string>(actionType: T) => (err?: string) => action<T, typeof err>(actionType, err);
