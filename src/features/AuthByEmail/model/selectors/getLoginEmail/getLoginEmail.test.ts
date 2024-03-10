import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginEmail } from './getLoginEmail';

describe('getLoginEmail.test', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: 'test@gmail.com',
      },
    };

    expect(getLoginEmail(state as StateSchema)).toEqual('test@gmail.com');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginEmail(state as StateSchema)).toEqual(undefined);
  });
});
