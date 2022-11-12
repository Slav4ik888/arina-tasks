import { MathSign, Task, Tasks } from 'app/types';
import {createMinus} from '../create-minus';
import {createPlus} from '../create-plus';


/** Создаём заданное кол-во примеров вычитания */
export const createMultyTasks = (
  qualMultyTasks : number,
  minMulty       : number,
  maxMulty       : number
): Tasks => {
  if (!qualMultyTasks) return [];

  let arr = [] as Tasks, task = {} as Task, task1: Task, task2: Task;

  for (let i = 0; i < qualMultyTasks; i++) {
    
    // Определяем тип первого действия и создаём его
    if (Math.round(Math.random()) === 0) {
      task1 = createPlus(minMulty, maxMulty);
      task1.type = MathSign.PLUS;
      // console.log('task1: ', task1);
    }
    else {
      task1 = createMinus(minMulty, maxMulty);
      task1.type = MathSign.MINUS;
      // console.log('task1: ', task1);

    };

    // Определяем тип второго действия
    if (Math.round(Math.random()) === 0) {
      task2 = createPlus(minMulty, maxMulty);
      task2.type = MathSign.PLUS;
      // console.log('task2: ', task2);
    }
    else {
      let remains;
      // Если А <= minMulty то прибавляем
      if (task1.type === MathSign.MINUS) {
        remains = task1.a - task1.b;
        if (remains <= minMulty) {
          task2 = createPlus(minMulty, maxMulty);
          task2.type = MathSign.PLUS;
          console.log('remains <<<< task2: ', task2);
        }
        else {
          task2 = createMinus(minMulty, remains);
          task2.type = MathSign.MINUS;
          // console.log('remains task2 "-": ', task2);
        }
      }
      else {
          task2 = createMinus(minMulty, maxMulty);
          task2.type = MathSign.MINUS;
          // console.log('task2 "-": ', task2);
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
    task = {} as Task; task1 = {} as Task; task2 = {} as Task;
  }
  return arr; // Возвращаем готовые приимеры
}
