import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  id?: number;
  email?: string;
  name?: string;
  surname?: string;
  age?: string;
  username?: string;
  role?: string;
  createdAt?: Date;
  avatar?: string;

  // TODO: Need to add in DB
  currency?: Currency;
  country?: Country;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
