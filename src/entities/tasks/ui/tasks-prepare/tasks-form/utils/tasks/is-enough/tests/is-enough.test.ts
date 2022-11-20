import { mocks } from './mocks';
import { isEnough } from '..';


describe('isEnough', () => {
  mocks.forEach((m, i) => {
    it(m[0].description, () => {
      expect(isEnough(m[0].amount, m[0].min, m[0].max)).toEqual(m[1])
    })
  })
});

// npm run test:unit is-enough.test.ts
