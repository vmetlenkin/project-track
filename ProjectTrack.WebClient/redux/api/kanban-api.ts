import { KanbanBoard } from "../../types/kanban-board";
import { instance } from "./index";

export const KanbanApi = {
  async getById(id: string): Promise<KanbanBoard> {
    const { data } = await instance.get(`/kanban?id=${id}`);
    return data;
  }
}