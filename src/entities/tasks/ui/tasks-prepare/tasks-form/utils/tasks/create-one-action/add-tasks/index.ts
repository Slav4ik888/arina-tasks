import { isEnough } from '../..';
import { Tasks } from '../../../../../../../model';
import { isDouble } from '../../is-double';
import { createOneAdd } from '../add';



/** Возвращает готовые приимеры на СЛОЖЕНИЕ */
export const createOneAddTasks = (
  amount : number,
  min    : number,
  max    : number
): Tasks => {
  let tasks = [] as Tasks, result = true;

  if (!amount) return [];
  
  for (let i=0; i < amount; i++) {
    const task = createOneAdd(min, max);
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
  return tasks;
}
