import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByEmail } from './loginByEmail';

describe('loginByEmail.test', () => {
  it('succes login', async () => {
    const userValue = { email: 'test@gmail.com', id: 1 };

    const thunk = new TestAsyncThunk(loginByEmail);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ email: 'test@gmail.com', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(true));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userValue);
  });

  it('error login', async () => {
    const thunk = new TestAsyncThunk(loginByEmail);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ email: 'test@gmail.com', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неверный email или password'); //! TODO: need to create ERROR-STATUS
  });
});
