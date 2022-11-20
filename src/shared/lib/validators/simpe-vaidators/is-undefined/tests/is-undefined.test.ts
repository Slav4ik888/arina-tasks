import { mocks } from './mocks';
import { isUndefined, noUndefined } from '..';


describe('isUndefined', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isUndefined(m[0])).toEqual(m[1])
    })
  })
});

describe('noUndefined', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noUndefined(m[0])).toEqual(!m[1])
    })
  })
});


// npm run test is-undefined.test.ts
