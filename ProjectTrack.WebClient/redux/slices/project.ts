import { ProjectResponse } from "../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface ProjectState {
  data: ProjectResponse | null;
}

const initialState: ProjectState = {
  data: null
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectData: (state, action: PayloadAction<ProjectResponse | null>) => {
      state.data = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user
      };
    }
  }
});

export const { setProjectData } = projectSlice.actions;

export const selectProjectData = (state: AppState) => state.project.data;

export const projectReducer = projectSlice.reducer;

