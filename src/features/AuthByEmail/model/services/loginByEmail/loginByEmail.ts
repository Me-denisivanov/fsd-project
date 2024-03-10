import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { ACCESS_TOKEN } from 'shared/const/localstorage';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, ThunkConfig<string>>(
  'login/loginByEmail',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/auth/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
      dispatch(userActions.setAuthUser(true));

      return response.data;
    } catch (error) {
      return rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
