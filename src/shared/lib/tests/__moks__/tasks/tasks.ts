import { MathSign, Task, Tasks } from 'entities/tasks/model/types';
import { StateTasks } from 'entities/tasks/model';


export const TASK_ONE_ADD: Task = {
  a      : 1,
  b      : 2,
  type1  : MathSign.ADD,
  result : 3
};

export const TASK_TWO_ADD_ADD: Task = {
  a      : 1,
  b      : 2,
  c      : 3,
  type1  : MathSign.ADD,
  type2  : MathSign.ADD,
  result : 6
};

export const TASK_TWO_ADD_SUB: Task = {
  a      : 1,
  b      : 2,
  c      : 3,
  type1  : MathSign.ADD,
  type2  : MathSign.SUB,
  result : 0
  
};

export const TASK_ONE_SUB: Task = {
  a      : 10,
  b      : 2,
  type1  : MathSign.SUB,
  result : 8
  
};

export const TASK_TWO_MINUS_MINUS: Task = {
  a      : 10,
  b      : 2,
  c      : 3,
  type1  : MathSign.SUB,
  type2  : MathSign.SUB,
  result : 5
};

export const TASKS: Tasks = [
  TASK_ONE_ADD,
  TASK_TWO_ADD_ADD,
  TASK_ONE_SUB,
  TASK_TWO_MINUS_MINUS
];

export const STATE_TASKS: StateTasks = {
  tasks: TASKS
}
