import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ACCESS_TOKEN } from 'shared/const/localstorage';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (!accessToken) {
        return [];
      }

      const response = await extra.api.get('/user/profile');

      if (!response.data) {
        throw new Error();
      }

      // dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
