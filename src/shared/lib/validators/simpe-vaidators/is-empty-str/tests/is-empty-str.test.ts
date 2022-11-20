import { mocks } from './mocks';
import { isEmptyStr, noEmptyStr } from '..';


describe('isEmptyStr', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isEmptyStr(m[0])).toEqual(m[1])
    })
  })
});

describe('noEmptyStr', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noEmptyStr(m[0])).toEqual(!m[1])
    })
  })
});

// npm run test is-empty-str.test.ts
