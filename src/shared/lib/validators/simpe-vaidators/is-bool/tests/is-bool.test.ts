import { mocks } from './mocks';
import { isBool, noBool } from '..';


describe('isBool', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isBool(m[0])).toEqual(m[1])
    })
  })
});

describe('noBool', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noBool(m[0])).toEqual(!m[1])
    })
  })
});


// npm run test is-bool.test.ts
