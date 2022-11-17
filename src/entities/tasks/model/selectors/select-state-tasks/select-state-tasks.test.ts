import { State } from 'app/providers/store/config/state';
import { STATE_TASKS } from 'shared/lib/tests/__moks__';
import { selectStateTasks } from '.';


describe('selectStateTasks', () => {
  test('Return state tasks', () => {
    const
      state: DeepPartial<State> = {
        stateTasks: { ...STATE_TASKS }
      };

    expect(selectStateTasks(state as State)).toEqual(STATE_TASKS);
  });

  test('State is undefined', () => {
    expect(selectStateTasks(undefined as unknown as State)).toEqual({});
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectStateTasks(state as State)).toEqual({});
  });
});

// npm run test:unit select-state-tasks.test.ts
