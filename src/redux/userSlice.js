import { createSlice } from '@reduxjs/toolkit';
import { singUpUser } from './operations';

const initialState = {
  name: '',
  email: '',
  password: '',
  token: null,
  isLogIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [singUpUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
    },
    [singUpUser.rejected]: (state, action) => {
      console.log('singUpUser.rejected');
    },
  },
});

export const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState: {
    isLogIn: false,
    token: '',
  },
  reducers: {
    setIsLogIn: (state, action) => {
      state.isLogIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { reducer: userSliceReducer } = userSlice;
export const { reducer: userStatusSliceReducer } = userStatusSlice;
