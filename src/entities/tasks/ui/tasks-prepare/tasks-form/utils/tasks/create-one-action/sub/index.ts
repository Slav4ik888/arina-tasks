import { Task, MathSign } from '../../../../../../../model';


/** Создаёт пример вычитания из 2х значения в виде объекта из 2х значение */
export const createOneSub = (min: number, max: number): Task => {
  let task = {} as Task;
  
  if (min > max) { console.log(`Ошибка min > max`); return }

  while (true) {
    task.a      = Math.floor(min + Math.random() * (max - min + 1) );
    task.b      = Math.floor(min + Math.random() * (task.a - min + 1) );
    task.type1  = MathSign.SUB;
    task.result = task.a - task.b;
    
    // Проверяем, чтобы цифры были не одинаковые
    if (task.a !== task.b || min === max) {
      return task; // Возвращаем готовый приимер
    } 
  }
}
