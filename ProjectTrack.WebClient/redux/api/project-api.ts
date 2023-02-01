import { instance } from "./index";

export type ProjectResponse = {
  id: string;
  name: string;
  kanbanBoards: any[]
  userId: string;
}

export type CreateProjectRequest = {
  id: string;
  name: string;
}

export const ProjectApi = {
  async create(request: CreateProjectRequest): Promise<ProjectResponse> {
    const { data } = await instance.post('/projects', request);
    return data;
  },
  async getById(id: string): Promise<ProjectResponse> {
    const { data } = await instance.get(`/projects/${id}`);
    console.log(data);
    return data;
  },
  async getByUserId(userId: string): Promise<ProjectResponse[]> {
    const { data } = await instance.get(`/projects?userId=${userId}`);
    return data.projects;
  }
}