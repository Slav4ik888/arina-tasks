import { mocks } from './mocks';
import { isArr, noArr } from '..';


describe('isArr', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isArr(m[0])).toEqual(m[1])
    })
  })
});

describe('noArr', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noArr(m[0])).toEqual(!m[1])
    })
  })
});

// npm run test is-arr.test.ts
