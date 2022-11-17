import { Tasks, Task } from '../../../model';


/** Проверки на дубликат примера */
export const isDouble = (
  arr  : Tasks,
  task : Task,
  qual : number,
  min  : number,
  max  : number
): boolean => {
  // Проверяем хватит ли кол-ва примеров, чтобы вывести без дубликатов 
  if ((max - min + 1) * (max - min + 1) > +qual) {

    for (let item of arr) {
      if (item.a === task.a && item.b === task.b) {
        console.log('Дубликат примера: ', item.a, '/', item.b);
        return true;
      }
    }
  }
  else {
    console.log(`Не проверяем на дубли так как выбрано мало кол-ва примеров: `);
  }

  return false;
};
