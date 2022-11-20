import { Mocks } from './types';

export const mocks: Mocks = [
  ['',        true],
  [undefined, true],
  [null,      true],
  [[]       as unknown as string, true],
  [{}       as unknown as string, true],
  [[1]      as unknown as string, true],
  [{ a: 1 } as unknown as string, true],
  [0        as unknown as string, true],

  ['0', false]
]
