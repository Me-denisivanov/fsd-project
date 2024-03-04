import { Country, Currency } from 'shared/const/common';

export interface Profile {
  id: number;
  email: string;
  name: string;
  surname: string;
  age: string;
  username: string;
  role: string;
  createdAt?: Date;

  // TODO: Need to add in DB
  currency?: Currency;
  country?: Country;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
