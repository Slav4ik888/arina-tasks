import {createMinus} from './create-minus.js';
import {createPlus} from './create-plus.js';

// Создаём заданное кол-во примеров вычитания
export const createMultyTasks = (qualMultyTasks, minMulty, maxMulty) => {
  if (!qualMultyTasks) return;

  let arr = [], task = {}, task1 = {}, task2 = {};

  for(let i=0; i < qualMultyTasks; i++) {
    // Определяем тип первого действия и создаём его
    if (Math.round(Math.random()) === 0) {
      task1 = createPlus(minMulty, maxMulty);
      task1.type = '+';
      // console.log('task1: ', task1);
        
    } else {
      task1 = createMinus(minMulty, maxMulty);
      task1.type = '-';
      // console.log('task1: ', task1);

    };

    // Определяем тип второго действия
    if (Math.round(Math.random()) === 0) {
      task2 = createPlus(minMulty, maxMulty);
      task2.type = '+';
      // console.log('task2: ', task2);

    } else {
      let remains;
      // Если А <= minMulty то прибавляем
      if (task1.type === '-') {
        remains = task1.a - task1.b;
        if (remains <= minMulty) {
          task2 = createPlus(minMulty, maxMulty);
          task2.type = '+';
          console.log('remains <<<< task2: ', task2);

        } else {
          task2 = createMinus(minMulty, remains);
          task2.type = '-';
          console.log('remains task2 "-": ', task2);
        }
      } else {

          task2 = createMinus(minMulty, maxMulty);
          task2.type = '-';
          console.log('task2 "-": ', task2);
      }
    };
    

    // Проверки на корректность
    if (true) {
      task.a = task1.a;
      task.b = task1.b;
      task.type1 = task1.type;
      task.c = task2.b;
      task.type2 = task2.type;

      arr.push(task); 
      i++;
    }
    i--;
    task = {}; task1 = {}; task2 = {};
  }
  return arr; // Возвращаем готовые приимеры
}