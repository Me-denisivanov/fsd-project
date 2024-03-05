import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_TOKEN } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (!accessToken) {
        return [];
      }

      const response = await extra.api.get('/user/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
