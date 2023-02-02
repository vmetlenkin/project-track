import { KanbanBoard, KanbanColumnTask, KanbanTask } from '../../types/kanban-board';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '../store';
import { KanbanApi } from "../api/kanban-api";
import { CreateTaskRequest, MoveKanbanTaskRequest, TaskApi, UpdateTaskRequest } from "../api/task-api";

export interface KanbanState {
  board: KanbanBoard | null;
  task: any | null;
  isLoading: boolean;
}

const initialState: KanbanState = {
  board: null,
  task: null,
  isLoading: false
}

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    setTaskIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setKanbanBoard: (state, action: PayloadAction<KanbanBoard | null>) => {
      state.board = action.payload;
      state.isLoading = false;
    },
    setKanbanTask: (state, action: PayloadAction<KanbanTask | null>) => {
      state.task = action.payload;
      state.isLoading = false;
    },
    addTaskCard: (state, action: PayloadAction<KanbanColumnTask>) => {
      const columns = JSON.parse(JSON.stringify(state.board.columns));
      const index = columns.findIndex(e => e.id === action.payload.kanbanColumnId);
      state.board.columns[index].tasks = [...state.board.columns[index].tasks, action.payload];
    },
    updateTaskCard: (state, action: PayloadAction<any>) => {
      const task = action.payload;
      const columnIndex = state.board.columns.findIndex(c => c.id === task.kanbanColumnId);

      const oldTask = state.board.columns[columnIndex].tasks[task.order];
      
      const updatedTask = { ...oldTask, title: task.title, text: task.id }
      
      state.board.columns[columnIndex].tasks[task.order] = updatedTask;
    },
    deleteTaskCard: (state, action: PayloadAction<any>) => {
      const task = action.payload;
      const columnIndex = state.board.columns.findIndex(c => c.id === task.kanbanColumnId);

      const startColumn = [...state.board.columns[columnIndex].tasks];
      startColumn.splice(task.order, 1);
      state.board.columns[columnIndex].tasks = startColumn;
    },
    changeTaskCardPosition: (state, action: PayloadAction<any>) => {
      const { source, destination } = action.payload;
      const columns = state.board.columns;

      if (destination.droppableId === source.droppableId) {
        const index = columns.findIndex(e => e.id === source.droppableId);
        const items = columns[index].tasks;
        const [removed] = items.splice(source.index, 1);
        items.splice(destination.index, 0, removed);
        
        state.board.columns[index] = { ...columns[index], tasks: items };
      } else {
        const startIndex = columns.findIndex(e => e.id === source.droppableId);
        const endIndex = columns.findIndex(e => e.id === destination.droppableId);
        const startColumn = [...columns[startIndex].tasks];
        const finishColumn = [...columns[endIndex].tasks];
        const [removed] = startColumn.splice(source.index, 1);
        finishColumn.splice(destination.index, 0, removed);

        state.board.columns[startIndex] = { ...columns[startIndex], tasks: startColumn };
        state.board.columns[endIndex] = { ...columns[endIndex], tasks: finishColumn };
      }
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.project
      };
    }
  },
});

export const fetchKanbanBoard = (id: string): AppThunk => async (dispatch) => {
  try {
    const board = await KanbanApi.getById(id);
    dispatch(setKanbanBoard(board));
  } catch (err) {
    console.error('Could not fetch kanban board: ' + err);
  }
};

export const createKanbanTask = (request: CreateTaskRequest): AppThunk => async (dispatch) => {
  try {
    const response = await TaskApi.create(request);
    dispatch(addTaskCard(response));
  } catch (err) {
    console.error('Could not create kanban board: ' + err);
  }
};

export const moveKanbanTask = (onDragResult: any): AppThunk => async (dispatch) => {
  const { source, destination, draggableId } = onDragResult;

  const request: MoveKanbanTaskRequest = {
    id: draggableId,
    sourceColumnId: source.droppableId,
    destinationColumnId: destination.droppableId,
    sourcePosition: source.index,
    destinationPosition: destination.index
  };

  // Чтобы не было лагов пока что диспатч вызывается раньше запроса
  dispatch(changeTaskCardPosition(onDragResult));
  
  try {
    const response = await TaskApi.moveKanbanTask(request);
    // Здесь нужно получить ответ от сервера с позицией карточки
    // и вызвать диспатч
  } catch (err) {
    console.error('Could not move card: ' + err);
  }
};

export const fetchTask = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setTaskIsLoading(true));
    const response = await TaskApi.getById(id);
    dispatch(setTaskIsLoading(false));
    
    dispatch(setKanbanTask(response));
  } catch (err) {
    console.error('Could not fetch kanban task: ' + err);
  }
};

export const updateTask = (request: UpdateTaskRequest): AppThunk => async (dispatch) => {
  try {
    const response = await TaskApi.updateKanbanTask(request);
    dispatch(updateTaskCard(response));
  } catch (err) {
    console.error('Could not update task: ' + err);
  }
};

export const deleteTask = (id: string): AppThunk => async (dispatch) => {
  try {
    const response = await TaskApi.deleteKanbanTask(id);
    dispatch(deleteTaskCard(response));
  } catch (err) {
    console.error('Could not delete task: ' + err);
  }
};

export const { 
  setTaskIsLoading,
  changeTaskCardPosition, 
  setKanbanTask, 
  updateTaskCard,
  deleteTaskCard,
  setKanbanBoard, 
  addTaskCard 
} = kanbanSlice.actions;

export const selectKanbanData = (state: AppState) => state.kanban;

export const kanbanReducer = kanbanSlice.reducer;