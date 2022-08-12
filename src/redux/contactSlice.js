import { createSlice } from '@reduxjs/toolkit';
import {
  addContactOperation,
  deleteContactOperation,
  fetchContactOperation,
  logOutUser,
} from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [addContactOperation.fulfilled]: (state, action) => {
      state.unshift(action.payload);
    },
    [fetchContactOperation.fulfilled]: (_, action) => {
      return action.payload;
    },
    [deleteContactOperation.fulfilled]: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    [logOutUser.fulfilled]: _ => [],
  },
});

export const { reducer: contactsSliceReducer } = contactsSlice;
export const { filter: filterSliceReducer } = contactsSlice.actions;
