import { State } from 'app/providers/store/config/state';
import { selectStatusFooter } from '.';


describe('selectStatusFooter', () => {
  test('Return loading', () => {
    const
      navbar = {
        statusFooter: true
      },
      state: DeepPartial<State> = {
        navbar
      };

    expect(selectStatusFooter(state as State)).toEqual(true);
  });

  test('State is undefined', () => {
    expect(selectStatusFooter(undefined as unknown as State)).toEqual(false);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectStatusFooter(state as State)).toEqual(false);
  });
});

// npm run test:unit select-footer-status.test.ts
