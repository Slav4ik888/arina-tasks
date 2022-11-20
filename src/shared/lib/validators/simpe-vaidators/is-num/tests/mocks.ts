import { Mocks } from './types';

export const mocks: Mocks = [
  [0,           true],
  [123,         true],
  [undefined,   false],
  [null,        false],
  [NaN,         false],
  ['123'    as unknown as number, false],
  [[]       as unknown as number, false],
  [{}       as unknown as number, false],
  [[1]      as unknown as number, false],
  [{ a: 1 } as unknown as number, false]
]
