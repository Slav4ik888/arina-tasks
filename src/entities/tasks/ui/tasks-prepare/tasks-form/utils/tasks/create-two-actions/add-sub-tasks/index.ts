import { MathSign, Task, Tasks } from '../../../../../../../model';
import { createOneSub } from '../../create-one-action/sub';
import { createOneAdd } from '../../create-one-action/add';
import { createTwoAddSub } from '../add-sub';


/** Создаём заданное кол-во примеров в 2 действия: с вычитанием и сложением */
export const createTwoAddSubTasks = (
  amount : number,
  min    : number,
  max    : number
): Tasks => {
  if (!amount) return [];

  const arr = [] as Tasks;

  for (let i = 0; i < amount; i++) {
    const task = createTwoAddSub(min, max);
    task.result = undefined;
    
    // Проверки на корректность
    if (true) {
      arr.push(task); 
      i++;
    }
    i--;
  }

  return arr; // Возвращаем готовые приимеры
}
