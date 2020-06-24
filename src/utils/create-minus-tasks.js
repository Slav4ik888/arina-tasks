import {createMinus} from './create-minus.js';

// Создаём заданное кол-во примеров вычитания
export const createMinusTasks = (qualMinusTasks, minMinus, maxMinus) => {
  if (!qualMinusTasks) return;

  let arr = [], task = {}, result = true;

  for(let i=0; i < qualMinusTasks; i++) {
      task = createMinus(minMinus, maxMinus);
      // Проверки на корректность
      for(let item of arr) {
          if (item.a === task.a && item.b === task.b) {
              console.log('Дубликат примера: ', item.a , '/', item.b );
              result = false;
          }
      }
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