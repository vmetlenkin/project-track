import { instance } from "./index";

export type CreateTaskResponse = {
  id: string;
  columnId: string;
  projectId: string;
  title: string;
  text: string;
}

export type CreateTaskRequest = {
  kanbanColumnId: string;
  title: string;
  text: string;
}

export type MoveKanbanTaskRequest = {
  id: string;
  sourceColumnId: string;
  destinationColumnId: string;
  sourcePosition: number;
  destinationPosition: number;
}

export const TaskApi = {
  async create(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    const { data } = await instance.post(`/tasks`, request);
    return data;
  },
  async moveKanbanTask(request: MoveKanbanTaskRequest): Promise<CreateTaskResponse> {
    const { data } = await instance.post(`/tasks/changePosition`, request);
    return data;
  },
}