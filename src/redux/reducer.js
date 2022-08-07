import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactOperation,
  deleteContactOperation,
  fetchContactOperation,
} from './operations';
import { filter } from './actions';

const itemReducer = createReducer([], {
  [fetchContactOperation.fulfilled]: (_, action) => action.payload,
  [deleteContactOperation.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addContactOperation.fulfilled]: (state, { payload }) => [payload, ...state],
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
