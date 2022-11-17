import { State } from 'app/providers/store/config/state';
import { selectStatusNavbar } from '.';


describe('selectStatusNavbar', () => {
  test('Return loading', () => {
    const
      navbar = {
        statusNavbar: true
      },
      state: DeepPartial<State> = {
        navbar
      };

    expect(selectStatusNavbar(state as State)).toEqual(true);
  });

  test('State is undefined', () => {
    expect(selectStatusNavbar(undefined as unknown as State)).toEqual(false);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectStatusNavbar(state as State)).toEqual(false);
  });
});

// npm run test:unit select-navbar-status.test.ts
