import { Tasks, Task } from '../../../model';
import { createMinus } from '../create-minus';
import { isDouble } from '../is-double';

/** Возвращает готовые приимеры на ВЫЧИТАНИЕ */
export const createMinusTasks = (
  qualMinusTasks : number,
  minMinus       : number,
  maxMinus       : number
): Tasks => {
  if (!qualMinusTasks) return [];

  let arr = [] as Tasks, task: Task, result = true;

  for(let i=0; i < qualMinusTasks; i++) {
    task = createMinus(minMinus, maxMinus);

    // Проверки на дубликат примера
    result = !isDouble(arr, task, qualMinusTasks, minMinus, maxMinus);  
    
    if (result) {
        arr.push(task); 
        i++;
    }
    i--;
    task = {} as Task;
    result = true;
  }
  return arr
}
