import { mocks } from './mocks';
import { isStr, noStr } from '..';


describe('isStr', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isStr(m[0])).toEqual(m[1])
    })
  })
});

describe('noStr', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noStr(m[0])).toEqual(!m[1])
    })
  })
});

// npm run test is-str.test.ts
