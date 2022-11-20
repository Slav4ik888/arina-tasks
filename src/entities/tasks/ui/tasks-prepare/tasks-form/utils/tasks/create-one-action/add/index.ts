import { MathSign, Task } from '../../../../../../../model';


export const createOneAdd = (min: number, max: number): Task => {
  let task = {} as Task;

  while (true) {
    task.a      = Math.floor(+min + Math.random() * (max - min + 1)  );
    task.b      = Math.floor(+min + Math.random() * (max - min + 1)  );
    task.type1  = MathSign.ADD;
    task.result = task.a + task.b;

    // Проверяем, чтобы цифры были не одинаковые
    if (task.a !== task.b || +min === +max) {
      return task; // Возвращаем готовый приимер
    } 
  }
}
