import { Tasks } from '../../../../../../../model';
import { getRandomBoolean } from 'shared/lib/random';
import { createOneAdd } from '../add';
import { createOneSub } from '../sub';
import { isDouble } from '../../is-double';
import { isEnough } from '../..';


export const createOneUnknownTasks = (
  amount : number,
  min    : number,
  max    : number
): Tasks => {
  if (!amount) return [];

  let tasks = [] as Tasks, result = true

  for (let i = 0; i < amount; i++) {
    // Determine what type of task will be, and create him
    const task = getRandomBoolean() ? createOneAdd(min, max) : createOneSub(min, max);

    // Проверки на дубликат примера
    if (isEnough(amount, min, max)) {
      result = !isDouble(tasks, task);  
    }
    else result = true

    if (result) {
      // Determine what digit will be unknown
      const isFirstDigitUnknown = getRandomBoolean();
      if (isFirstDigitUnknown) task.a = undefined;
      else task.b = undefined;

      tasks.push({ ...task });
      i++;
    }
    i--;
  }

  return tasks
}
