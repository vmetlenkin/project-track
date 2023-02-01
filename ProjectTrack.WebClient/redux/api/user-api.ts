import { instance } from "./index";

export type LoginRequest = {
  email: string;
  password: string;
}

export type UserResponse = {
  id: string;
  email: string;
  nickname: string;
  token: string;
}

export type CreateUserRequest = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const UserApi = {
  async register(request: CreateUserRequest): Promise<UserResponse> {
    const { data } = await instance.post('/auth/register', request);
    return data;
  },
  async login(request: LoginRequest): Promise<UserResponse> {
    const { data } = await instance.post('/auth/login', request);
    return data;
  },
  async getUser(token: string): Promise<UserResponse> {
    const { data } = await instance.get(`/auth/getuser?token=${token}`);
    return data;
  }
};