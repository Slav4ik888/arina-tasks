import { Tasks, Task } from '../../../../../../model';


export const isDouble = (
  tasks : Tasks,
  task  : Task
): boolean => {
  for (let item of tasks) {
    if (
      item.a === task.a &&
      item.b === task.b &&
      item.c === task.c &&
      item.type1 === task.type1 &&
      item.type2 === task.type2
    ) {
      console.log('Дубликат примера: ', item.a, item.type1, item.b);
      return true;
    }
  }
  return false;
};
