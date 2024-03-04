import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { ACCESS_TOKEN } from 'shared/const/localstorage';

export const fetchUserData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'login/fetchUserData',
  async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (!accessToken) {
        return [];
      }

      const response = await extra.api.get('/user/profile');

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
