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

export type CreateProjectDto = {
  id: string;
  name: string;
}

export type ProjectResponse = {
  id: string;
  name: string;
  kanbanBoards: any[]
  userId: string;
}

export type CreateTaskResponse = {
  id: string;
  columnId: string;
  projectId: string;
  title: string;
  text: string;
}