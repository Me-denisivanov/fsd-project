import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { ACCESS_TOKEN } from 'shared/const/localstorage';

export const fetchUserData = createAsyncThunk<User, void, { rejectValue: string }>(
  'login/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (!accessToken) {
        return [];
      }

      const response = await axios.get('http://localhost:1111/api/user/profile', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
