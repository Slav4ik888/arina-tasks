import { mocks } from './mocks';
import { isEmail, noEmail } from '..';


describe('isEmail', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(m[1])}`, () => {
      expect(isEmail(m[0])).toEqual(m[1])
    })
  })
});

describe('noEmail', () => {
  mocks.forEach(m => {
    it(`${String(m[0])} = ${String(!m[1])}`, () => {
      expect(noEmail(m[0])).toEqual(!m[1])
    })
  })
});


// npm run test is-email.test.ts
