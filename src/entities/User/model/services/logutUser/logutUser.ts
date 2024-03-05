import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';

export const logutUser = createAsyncThunk<boolean, void, ThunkConfig<string>>(
  'user/logutUser',
  async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      await extra.api.post('/auth/logout');
      localStorage.clear();
      dispatch(userActions.logout());

      return true;
    } catch (error) {
      return rejectWithValue('Не удалось выйти из системы');
    }
  },
);
