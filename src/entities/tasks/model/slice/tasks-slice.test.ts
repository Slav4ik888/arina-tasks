import { TASKS } from 'shared/lib/tests/__moks__';
import { tasksReducer, tasksActions } from '.';
import { StateTasks } from '../types';


const state: DeepPartial<StateTasks> = {
  tasks: []
};

describe('tasksSlice', () => {
  test('setTasks', () => {
    expect(tasksReducer(
      state as StateTasks,
      tasksActions.setTasks(TASKS)
    ))
      .toEqual({ ...state, tasks: TASKS });
  });
});

// npm run test:unit tasks-slice.test.ts
