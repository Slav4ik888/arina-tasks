import { Mocks } from './types';

const strLength = (n: number, char: string): string => [...new Array(n)]
  .map(_ => char)
  .join('')


export const getMockStrLength = (n: number, char?: string): string => {
  let c = '_';

  if (char && typeof char === 'string') c = char[0];

  return strLength(n, c);
}



export const mocks: Mocks = [
  [
    {
      description : 'Valid text = maxLength',
      maxLength   : 101,
      str         : getMockStrLength(101)
    },
    true
  ],
  [
    {
      description : 'Text is empty string',
      maxLength   : 101,
      str         : ''
    },
    true
  ],
  [
    {
      description : 'Invalid text > maxLength',
      maxLength   : 101,
      str         : getMockStrLength(102)
    },
    false
  ],
  [
    {
      description : 'Text is undefined',
      maxLength   : 101,
      str         : undefined
    },
    false
  ]
]
