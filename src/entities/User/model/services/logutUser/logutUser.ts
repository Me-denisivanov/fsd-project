import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User';

export const logutUser = createAsyncThunk('login/logutUser', async (_, thunkAPI) => {
  try {
    await axios.post('http://localhost:1111/api/auth/logout');
    localStorage.clear();
    return thunkAPI.dispatch(userActions.logout());
  } catch (error) {
    return thunkAPI.rejectWithValue('Не удалось выйти из системы');
  }
});
