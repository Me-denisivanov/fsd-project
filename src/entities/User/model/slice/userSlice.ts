import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ACCESS_TOKEN } from 'shared/const/localstorage';
import { UserSchema } from '../types/User';

const initialState: UserSchema = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    initAuthUser: (state) => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
