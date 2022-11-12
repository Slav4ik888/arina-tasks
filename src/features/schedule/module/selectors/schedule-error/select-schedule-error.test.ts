import { State } from 'app/providers/store/config/state';
import { Schedule } from 'features/schedule';
import { selectScheduleError } from '.';


describe('selectScheduleError', () => {
  test('Return error', () => {
    const
      schedule = {
        error: { general: '123' }
      },
      state: DeepPartial<State> = {
        schedule
      };

    expect(selectScheduleError(state as State)).toEqual({ general: '123' });
  });

  test('State is undefined', () => {
    expect(selectScheduleError(undefined as unknown as State)).toEqual({});
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectScheduleError(state as State)).toEqual({});
  });
});

// npm run test:unit select-schedule-error.test.ts
