import { Task, Tasks } from 'app/types';
import { createPlus } from '../create-plus';
import { isDouble } from '../is-double';



/** Возвращает готовые приимеры на СЛОЖЕНИЕ */
export const createPlusTasks = (
  qualPlusTasks : number,
  minPlus       : number,
  maxPlus       : number
): Tasks => {
  let arr = [] as Tasks, task: Task, result = true;

  if (!qualPlusTasks) return [];
  
  for (let i=0; i < qualPlusTasks; i++) {
    task = createPlus(minPlus, maxPlus);
    
    // Проверки на дубликат примера
    result = !isDouble(arr, task, qualPlusTasks, minPlus, maxPlus);  
      
    if (result) {
        arr.push(task); 
        i++;
    }
    i--;
    task = {} as Task;
    result = true;

  }
  return arr;
}
