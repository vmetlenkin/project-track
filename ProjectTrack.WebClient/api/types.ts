export type LoginDto = {
  email: string;
  password: string;
}

export type CreateUserDto = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type UserResponse = {
  id: string;
  email: string;
  nickname: string;
  token: string;
}