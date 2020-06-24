import {createPlus} from './create-plus.js';

export const createPlusTasks = (qualPlusTasks, minPlus, maxPlus) => {
  let arr = [], task = {}, result = true;

  if (!qualPlusTasks) return;
  
  for(let i=0; i < qualPlusTasks; i++) {
      task = createPlus(minPlus, maxPlus);
      
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
