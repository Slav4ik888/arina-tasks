import { MathSign, Task, Tasks } from 'entities/tasks/model/types';
import { StateTasks } from 'entities/tasks/model';


export const TASK_PLUS: Task = {
  a     : 1,
  b     : 2,
  type1 : MathSign.PLUS
};

export const TASK_PLUS_PLUS: Task = {
  a     : 1,
  b     : 2,
  c     : 3,
  type1 : MathSign.PLUS,
  type2 : MathSign.PLUS
};

export const TASK_MINUS: Task = {
  a     : 10,
  b     : 2,
  type1 : MathSign.MINUS
};

export const TASK_MINUS_MINUS: Task = {
  a     : 10,
  b     : 2,
  c     : 3,
  type1 : MathSign.MINUS,
  type2 : MathSign.MINUS
};

export const TASKS: Tasks = [
  TASK_PLUS,
  TASK_PLUS_PLUS,
  TASK_MINUS,
  TASK_MINUS_MINUS
];

export const STATE_TASKS: StateTasks = {
  tasks: TASKS
}
