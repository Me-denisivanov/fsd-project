import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '1234',
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('1234');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
  });
});
