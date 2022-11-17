import { createSelector } from '@reduxjs/toolkit';
import { Tasks, StateTasks } from '../../types';
import { selectStateTasks } from '../select-state-tasks';


export const selectTasks = createSelector(
  selectStateTasks,
  (stateTasks: StateTasks) => stateTasks?.tasks || {} as Tasks
);
