import { ProjectResponse } from "../../api/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState, AppThunk } from "../store";
import { ProjectApi } from "../../api";

export interface ProjectState {
  data: {
    projectList: ProjectResponse[] | null,
    project: ProjectResponse | null
  }
}

const initialState: ProjectState = {
  data: {
    projectList: null,
    project: null
  }
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectListData: (state, action: PayloadAction<ProjectResponse[] | null>) => {
      state.data.projectList = action.payload;
    },
    setProjectData: (state, action: PayloadAction<ProjectResponse | null>) => {
      state.data.project = action.payload;
    },
    addProject: (state, action: PayloadAction<ProjectResponse>) => {
      state.data.projectList = [...state.data.projectList, action.payload];
    },
    addTaskCard: (state, action: PayloadAction<any>) => {
      state.data.project.kanbanColumns[3].tasks = [...state.data.project.kanbanColumns[3].tasks, action.payload];
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

export const fetchProjectsByUserId = (userId: string): AppThunk =>
  async dispatch => {
    const projects = await ProjectApi.getByUserId(userId);

    dispatch(projectSlice.actions.setProjectListData(projects));
};

export const { setProjectListData, setProjectData, addProject, addTaskCard } = projectSlice.actions;

export const selectProjectData = (state: AppState) => state.project.data;

export const projectReducer = projectSlice.reducer;

