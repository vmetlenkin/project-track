import axios from 'axios';
import { CreateUserDto, LoginDto, UserResponse } from "./types";

const instance = axios.create({
  baseURL: 'http://localhost:5253'
});

export const UserApi = {
  async register(dto: CreateUserDto): Promise<UserResponse> {
    const { data } = await instance.post('/auth/register', dto);
    return data;
  },
  async login(dto: LoginDto): Promise<UserResponse> {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },
  async getUser(token: string): Promise<UserResponse> {
    const { data } = await instance.get(`/auth/getuser?token=${token}`);
    return data;
  }
};