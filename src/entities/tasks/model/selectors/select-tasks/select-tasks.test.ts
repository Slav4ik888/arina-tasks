import { State } from 'app/providers/store';
import { STATE_TASKS, TASKS } from 'shared/lib/tests/__moks__';
import { selectTasks } from '.';


describe('selectTasks', () => {
  test('Shoul return tasks', () => {
    const state: DeepPartial<State> = {
      stateTasks: { ...STATE_TASKS }
    };

    expect(selectTasks(state as State)).toEqual(TASKS);
  });

  test('Shoul work with undefined State', () => {
    expect(selectTasks(undefined as unknown as State)).toEqual({});
  });

  test('Shoul work with empty State', () => {
    expect(selectTasks({} as unknown as State)).toEqual({});
  });
});

// npm run test:unit select-tasks.test.ts
