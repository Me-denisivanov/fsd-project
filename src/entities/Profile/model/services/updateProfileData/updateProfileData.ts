import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/user/update', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data as Profile;
    } catch (error) {
      return rejectWithValue('Вы ввели неверный email или password');
    }
  },
);
