import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62e66c32de23e263792c05a8.mockapi.io';

export const fetchContactOperation = createAsyncThunk(
  'FETCH_CONTACT',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContactOperation = createAsyncThunk(
  'ADD_CONTACT',
  async ({ name, phone }) => {
    const response = await axios.post('/contacts', {
      name,
      phone,
    });
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
