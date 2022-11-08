import { State } from 'app/providers/store/config/state';
import { selectNavbarStatus } from '.';


describe('selectNavbarStatus', () => {
  test('Return loading', () => {
    const
      navbar = {
        status: true
      },
      state: DeepPartial<State> = {
        navbar
      };

    expect(selectNavbarStatus(state as State)).toEqual(true);
  });

  test('State is undefined', () => {
    expect(selectNavbarStatus(undefined as unknown as State)).toEqual(false);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectNavbarStatus(state as State)).toEqual(false);
  });
});

// npm run test:unit select-navbar-status.test.ts
