import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  it('test set email', () => {
    const state: DeepPartial<LoginSchema> = { email: 'test@gmail.com' };
    expect(loginReducer(state as LoginSchema, loginActions.setEmail('test@gmail.com'))).toEqual({
      email: 'test@gmail.com',
    });
  });

  it('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234'))).toEqual({
      password: '1234',
    });
  });
});
