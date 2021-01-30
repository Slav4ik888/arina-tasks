import {createPlus} from './create-plus.js';
import { isDouble } from './isDouble';

export const createPlusTasks = (qualPlusTasks, minPlus, maxPlus) => {
  let arr = [], task = {}, result = true;

  if (!qualPlusTasks) return;
  
  for (let i=0; i < qualPlusTasks; i++) {
    task = createPlus(minPlus, maxPlus);
    
    // Проверки на дубликат примера
    result = !isDouble(arr, task, qualPlusTasks, minPlus, maxPlus);  
      
    if (result) {
        arr.push(task); 
        i++;
    }
    i--;
    task = {};
    result = true;

  }
  return arr; // Возвращаем готовые приимеры
}
