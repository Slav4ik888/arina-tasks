import { MathSign } from 'entities/tasks/model';
import { TASKS, TASK_ONE_ADD, TASK_TWO_MINUS_MINUS } from 'shared/lib/tests/__moks__';
import { Mocks } from './types';



export const mocks: Mocks = [
  [
    {
      description : 'Task one not double',
      tasks       : TASKS,
      task        : {
        a      : 1,
        b      : 2,
        type1  : MathSign.SUB
      }
    },
    false
  ],
  [
    {
      description : 'Task one isDouble',
      tasks       : TASKS,
      task        : TASK_ONE_ADD
    },
    true
  ],
  [
    {
      description : 'Task two isDouble',
      tasks       : TASKS,
      task        : TASK_TWO_MINUS_MINUS
    },
    true
  ],
];
