import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Schedule, ScheduleError, StateSchedule, TodoList } from '../types';
import * as LS from 'shared/lib/local-storage';
import { EMPTY_SCHEDULE, DEMO_TODO_LIST } from '../../utils';


const
  schedule = LS.getSchedule(),
  todoList = LS.getTodolist(),

  initialState: StateSchedule = {
    error    : null,
    schedule : schedule?.length ? schedule : EMPTY_SCHEDULE,
    todoList : todoList?.length ? todoList : DEMO_TODO_LIST
  };

const slice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = {}
    },
    setError: (state, { payload }: PayloadAction<ScheduleError>) => {
      state.error = payload
    },
    setSchedule: (state, { payload }: PayloadAction<Schedule>) => {
      state.schedule = payload;
    },
    setTodoList: (state, { payload }: PayloadAction<TodoList>) => {
      state.todoList = payload;
    }
  }
});

export const {
  actions: scheduleActions,
  reducer: scheduleReducer
} = slice;
