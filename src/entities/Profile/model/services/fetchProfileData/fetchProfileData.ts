import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>('/user/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data as Profile;
    } catch (error) {
      return rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
