import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: '22',
  country: Country.UKRAINE,
  name: 'Denis',
  surname: 'Test',
  currency: Currency.UAH,
};

describe('validateProfileData.test', () => {
  it('succes', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  it('without name or surname', async () => {
    const result = validateProfileData({ ...data, name: '', surname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  it('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  it('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
