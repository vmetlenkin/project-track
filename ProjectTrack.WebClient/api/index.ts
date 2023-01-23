import axios from 'axios';
import {CreateProjectDto, CreateUserDto, LoginDto, ProjectResponse, UserResponse} from "./types";

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

export const ProjectApi = {
  async create(dto: CreateProjectDto): Promise<ProjectResponse> {
    const { data } = await instance.post('/projects', dto);
    return data;
  },
  async getByUserId(): Promise<ProjectResponse[]> {
    const { data } = await instance.get('/projects');
    return data.projects;
  }
}