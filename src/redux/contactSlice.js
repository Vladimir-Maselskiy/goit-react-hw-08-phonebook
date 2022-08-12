import { createSlice } from '@reduxjs/toolkit';
import { addContactOperation, fetchContactOperation } from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [addContactOperation.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [fetchContactOperation.fulfilled]: (_, action) => {
      return action.payload;
    },
  },
});

export const { reducer: contactsSliceReducer } = contactsSlice;
export const { filter: filterSliceReducer } = contactsSlice.actions;
