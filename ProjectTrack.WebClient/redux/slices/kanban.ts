import { KanbanBoard, KanbanColumn, KanbanColumnTask } from '../../types/kanban-board';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '../store';
import { KanbanApi, TaskApi } from '../../api';

export interface KanbanState {
  board: KanbanBoard | null;
  isLoading: boolean;
}

const initialState: KanbanState = {
  board: null,
  isLoading: true
}


export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    setKanbanBoard: (state, action: PayloadAction<KanbanBoard | null>) => {
      state.board = action.payload;
      state.isLoading = false;
    },
    addTaskCard: (state, action: PayloadAction<KanbanColumnTask>) => {
      const columns = JSON.parse(JSON.stringify(state.board.columns));
      const index = columns.findIndex(e => e.id === action.payload.kanbanColumnId);
      state.board.columns[index].tasks = [...state.board.columns[index].tasks, action.payload];
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

export const fetchKanbanByProject = (id: string): AppThunk => async (dispatch) => {
  const board = await KanbanApi.getById(id);
  dispatch(setKanbanBoard(board));
};

export const createKanbanTask = (dto): AppThunk => async (dispatch) => {
  const response = await TaskApi.create(dto);
  dispatch(addTaskCard(response));
};

export const moveKanbanTask = (onDragResult): AppThunk => async (dispatch) => {
  const { source, destination, draggableId } = onDragResult;

  dispatch(changeTaskCardPosition(onDragResult));
  
  const dto = {
    id: draggableId,
    sourceColumnId: source.droppableId,
    destinationColumnId: destination.droppableId,
    destinationPosition: destination.index
  };
  
  const response = await TaskApi.moveKanbanTask(dto);
  console.log(response);
};

export const { changeTaskCardPosition, setKanbanBoard, addTaskCard } = kanbanSlice.actions;

export const selectKanbanData = (state: AppState) => state.kanban;

export const kanbanReducer = kanbanSlice.reducer;