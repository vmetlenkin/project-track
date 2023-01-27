﻿import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from '../../api/types';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  data: UserResponse | null;
}

const initialState: UserState = {
  data: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserResponse | null>) => {
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


export const { setUserData } = userSlice.actions;

export const selectUserData = (state: AppState) => state.user.data;

export const userReducer = userSlice.reducer;