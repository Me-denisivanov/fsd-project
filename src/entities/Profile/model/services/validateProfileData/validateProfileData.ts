import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { name, surname, age, country } = profile;

  const errors: ValidateProfileError[] = [];

  if (!name || !surname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
