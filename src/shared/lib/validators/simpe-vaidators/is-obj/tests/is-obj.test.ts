import { mocks } from './mocks';
import { isObj, noObj } from '..';


describe('isObj', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isObj(m[0])).toEqual(m[1])
    })
  })
});

describe('noObj', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noObj(m[0])).toEqual(!m[1])
    })
  })
});

// npm run test is-obj.test.ts
