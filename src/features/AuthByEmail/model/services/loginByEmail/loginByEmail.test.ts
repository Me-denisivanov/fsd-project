import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByEmail } from './loginByEmail';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByEmail.test', () => {
  it('succes login', async () => {
    const userValue = { email: 'test@gmail.com', id: 1 };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByEmail);
    const result = await thunk.callThunk({ email: 'test@gmail.com', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userValue);
  });

  it('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByEmail);
    const result = await thunk.callThunk({ email: 'test@gmail.com', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неверный email или password'); //! TODO: need to create ERROR-STATUS
  });
});
