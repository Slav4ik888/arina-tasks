import { MathSign, Task } from '../../../../../../../model';
import { createOneSub } from '../../create-one-action/sub';
import { createOneAdd } from '../../create-one-action/add';


/** Создаём пример в 2 действия: с вычитанием и сложением */
export const createTwoAddSub = (
  min    : number,
  max    : number
): Task => {
  const task = {} as Task;
    
  let
    task1type: MathSign, // Вспомогательный
    task2type: MathSign, // Вспомогательный
    task1: Task,
    task2: Task;

  // Определяем тип первого действия и создаём его
  if (Math.round(Math.random()) === 0) {
    task1 = createOneAdd(min, max);
    task1type = MathSign.ADD;
  }
  else {
    task1 = createOneSub(min, max);
    task1type = MathSign.SUB;
  };

  // Определяем тип второго действия
  if (Math.round(Math.random()) === 0) {
    task2 = createOneAdd(min, max);
    task2type = MathSign.ADD;
  }
  else {
    let remains;
    // Если А <= min то прибавляем
    if (task1type === MathSign.SUB) {
      remains = task1.a - task1.b;
      if (remains <= min) {
        task2 = createOneAdd(min, max);
        task2type = MathSign.ADD;
        console.log('remains <<<< task2: ', task2);
      }
      else {
        task2 = createOneSub(min, remains);
        task2type = MathSign.SUB;
        // console.log('remains task2 "-": ', task2);
      }
    }
    else {
        task2 = createOneSub(min, max);
        task2type = MathSign.SUB;
        // console.log('task2 "-": ', task2);
    }
  };
    

  task.a      = task1.a;
  task.b      = task1.b;
  task.type1  = task1type;
  task.c      = task2.b;
  task.type2  = task2type;
  
  if (task.type1 === MathSign.ADD) task.result = task.a + task.b
  if (task.type1 === MathSign.SUB) task.result = task.a - task.b

  if (task.type2 === MathSign.ADD) task.result += task.b
  if (task.type2 === MathSign.SUB) task.result = task.result - task.b

  
  return task;
}
