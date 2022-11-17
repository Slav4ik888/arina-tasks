import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateTasks, Tasks } from '../types';
import * as LS from 'shared/lib/local-storage';



const initialState: StateTasks = {
  tasks: LS.getExPanel()?.lastTasks || []
};


export const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, { payload }: PayloadAction<Tasks>) => {
      state.tasks = [...payload];
    }
  }
})

export const {
  actions: tasksActions,
  reducer: tasksReducer
} = slice;
