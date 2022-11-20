import { isEnough } from '../..';
import { Tasks } from '../../../../../../../model';
import { isDouble } from '../../is-double';
import { createOneSub } from '../sub';


/** Возвращает готовые приимеры на ВЫЧИТАНИЕ */
export const createOneSubTasks = (
  amount : number,
  min    : number,
  max    : number
): Tasks => {
  if (!amount) return [];

  let tasks = [] as Tasks, result = true;

  for(let i=0; i < amount; i++) {
    const task = createOneSub(min, max);
    task.result = undefined;

    // Проверки на дубликат примера
    if (isEnough(amount, min, max)) {
      result = !isDouble(tasks, task);  
    }
    else result = true
    
    if (result) {
      tasks.push({ ...task }); 
      i++;
    }
    i--;
  }
  return tasks
}
