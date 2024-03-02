import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { ACCESS_TOKEN } from 'shared/const/localstorage';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
  'login/loginByEmail',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:1111/api/auth/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
