import { MathSign, Task } from '../../../model';


export const createPlus = (minPlus: number, maxPlus: number): Task => {
  let task = {} as Task;

  while (true) {
    task.a = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
    task.b = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
    task.type1 = MathSign.PLUS;

    // Проверяем, чтобы цифры были не одинаковые
    if (task.a !== task.b || +minPlus === +maxPlus) {
      return task; // Возвращаем готовый приимер
    } 
  }
}
