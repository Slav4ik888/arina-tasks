import { Tasks } from '../../../../../../../model';
import { getRandomBoolean, getRandomNumber } from 'shared/lib/random';
import { createOneAdd } from '../../create-one-action/add';
import { createOneSub } from '../../create-one-action/sub';
import { isDouble } from '../../is-double';
import { isEnough } from '../..';
import { createTwoAddSub } from '../add-sub';


export const createTwoUnknownTasks = (
  amount : number,
  min    : number,
  max    : number
): Tasks => {
  if (!amount) return [];

  let tasks = [] as Tasks, result = true

  for (let i = 0; i < amount; i++) {
    const task = createTwoAddSub(min, max);
    
    // Проверки на дубликат примера
    if (isEnough(amount, min, max)) {
      result = !isDouble(tasks, task);  
    }
    else result = true

    if (result) {
      // Determine what digit will be unknown
      const unknown = getRandomNumber(1, 99);
      if (unknown < 34) task.a = undefined;
      else if (unknown > 33 && unknown < 64) task.b = undefined;
      else task.c = undefined;

      tasks.push({ ...task });
      i++;
    }
    i--;
  }

  return tasks
}
