import { Mocks } from './types';


export const mocks: Mocks = [
  [
    {
      description: 'Enough examples',
      amount : 9,
      min    : 1,
      max    : 3
    },
    true
  ],
  [
    {
      description: 'Not enough examples',
      amount : 10,
      min    : 1,
      max    : 3
    },
    false
  ],
  [
    {
      description: 'Enough examples',
      amount : 16,
      min    : 3,
      max    : 6
    },
    true
  ],
  [
    {
      description: 'Enough examples',
      amount : 17,
      min    : 3,
      max    : 6
    },
    false
  ],
];
