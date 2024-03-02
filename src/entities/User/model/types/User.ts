export interface User {
  id: string;
  email: string;
  age: number;
  name: string;
  role: string;
  surname: string;
  username: string;
  createdAt: Date;
}

export interface UserSchema {
  authData?: User;
}
