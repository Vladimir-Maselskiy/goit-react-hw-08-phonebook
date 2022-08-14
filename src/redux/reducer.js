import { createReducer } from '@reduxjs/toolkit';
import { changeThemeMode, filter } from './actions';
import { changeLocale } from './actions';

export const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

export const themeModeReducer = createReducer(true, {
  [changeThemeMode]: (_, { payload }) => payload,
});
export const localeReducer = createReducer('en', {
  [changeLocale]: (_, { payload }) => payload,
});
