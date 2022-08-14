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
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [singUpUser.rejected]: (_, action) => {
      console.log(action.payload);
    },
    [logInUser.fulfilled]: (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogIn = true;
    },

    [logInUser.rejected]: (_, action) => {
      console.log(action.payload);
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
