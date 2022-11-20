import { mocks } from './mocks';
import { isDouble } from '..';


describe('isDouble', () => {
  mocks.forEach((m, i) => {
    it(m[0].description, () => {
      expect(isDouble(m[0].tasks, m[0].task)).toEqual(m[1])
    })
  })
});

// npm run test:unit is-double.test.ts
