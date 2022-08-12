import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logOutUser, singUpUser } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [singUpUser.fulfilled]: (state, action) => {
      state.user.token = action.payload.token;
    },
    [singUpUser.rejected]: (state, action) => {
      console.log('singUpUser.rejected');
    },
    [logInUser.fulfilled]: (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogIn = true;
    },

    [logInUser.rejected]: (state, action) => {
      console.log('logInUser.rejected');
    },
    [logOutUser.fulfilled]: state => {
      state.user.name = '';
      state.user.email = '';
      state.token = null;
      state.isLogIn = false;
    },
  },
});

export const { reducer: userSliceReducer } = userSlice;
