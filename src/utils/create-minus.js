// Создаёт пример вычитания из 2х значения в виде объекта из 2х значение
export const createMinus = (minMinus, maxMinus) => {
  let task = {};
  if (minMinus > maxMinus) { console.log(`Ошибка minMinus > maxMinus`); return }

  while (true) {
    task.a = Math.floor(+minMinus + Math.random() * (maxMinus - minMinus + 1) );
    task.b = Math.floor(+minMinus + Math.random() * (task.a - minMinus + 1) );
    task.type1 = '-';
    
    // Проверяем, чтобы цифры были не одинаковые
    if (task.a !== task.b || +minMinus === +maxMinus) {
        return task; // Возвращаем готовый приимер
    } 
  }
}