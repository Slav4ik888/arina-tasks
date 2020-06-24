export const createPlus = (minPlus, maxPlus) => {
  let  task = {};

  while (true) {
    task.a = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
    task.b = Math.floor(+minPlus + Math.random() * (maxPlus - minPlus + 1)  );
    task.type1 = '+';

    // Проверяем, чтобы цифры были не одинаковые
    if (task.a !== task.b || +minPlus === +maxPlus) {
      return task; // Возвращаем готовый приимер
    } 
  }
}