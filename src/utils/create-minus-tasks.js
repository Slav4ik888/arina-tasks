import { createMinus } from './create-minus.js';
import { isDouble } from './isDouble';

// Создаём заданное кол-во примеров вычитания
export const createMinusTasks = (qualMinusTasks, minMinus, maxMinus) => {
  if (!qualMinusTasks) return;

  let arr = [], task = {}, result = true;

  for(let i=0; i < qualMinusTasks; i++) {
    task = createMinus(minMinus, maxMinus);

    // Проверки на дубликат примера
    result = !isDouble(arr, task, qualMinusTasks, minMinus, maxMinus);  
    
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