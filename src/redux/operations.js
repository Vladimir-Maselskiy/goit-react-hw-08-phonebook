import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const axiosAPI = {
  setToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unSetToken() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const fetchContactOperation = createAsyncThunk(
  'FETCH_CONTACT',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContactOperation = createAsyncThunk(
  'ADD_CONTACT',
  async user => {
    const response = await axios.post('/contacts', user);
    return response.data;
  }
);

export const deleteContactOperation = createAsyncThunk(
  'DELETE_CONTACT',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);

export const singUpUser = createAsyncThunk(
  'SING_UP_USER',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', user);
      return response.data;
    } catch (error) {
      alert(
        'Oops!!!  ‿︵‿ヽ(°□° )ノ︵‿︵   something went wrong,  please try again'
      );
      return rejectWithValue();
    }
  }
);

export const logInUser = createAsyncThunk(
  'LOG_IN_USER',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', user);
      axiosAPI.setToken(response.data.token);
      // navigate('/contacts');
      return response.data;
    } catch (error) {
      alert('Invalid email or password');
      return rejectWithValue();
    }
  }
);

export const logOutUser = createAsyncThunk('LOG_OUT_USER', async token => {
  try {
    axiosAPI.setToken(token);
    const response = await axios.post('/users/logout');
    return response.data;
  } catch (error) {
    return error;
  }
});
