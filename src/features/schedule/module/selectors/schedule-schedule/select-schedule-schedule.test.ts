import { State } from 'app/providers/store/config/state';
import { Schedule } from 'features/schedule';
import { selectScheduleSchedule } from '.';


describe('selectScheduleSchedule', () => {
  test('Return scheduleSchedule', () => {
    const
      schedule = {
        schedule: [`123`] as unknown as Schedule
      },
      state: DeepPartial<State> = {
        schedule
      };

    expect(selectScheduleSchedule(state as State)).toEqual([`123`]);
  });

  test('State is undefined', () => {
    expect(selectScheduleSchedule(undefined as unknown as State)).toEqual([]);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectScheduleSchedule(state as State)).toEqual([]);
  });
});

// npm run test:unit select-schedule-schedule.test.ts
