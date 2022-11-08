/**
 * Выбор случайного числа в заданном промежутке
 * @param {Number} min - Минимальное допустимое значение (включительно)
 * @param {Number} max - Максимальное допустимое значение (включительно)
 * @return {Number} Случайное целое число в данном промежутке
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Возвращает случайную букву англ алфавита
 * @return {string}
 */
export const getRandomEngLitera = (): string => {
  const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return eng[getRandomNumber(0, 25)];
};

// Возвращает строку из n случайных букв
export const getRandomLetters = (n: number): string => {
  let str = '';

  for (let i = 0; i < n; i++) {
    str += getRandomEngLitera();
  }
  return str;
};

export const getRandom5Letters = (): string => getRandomLetters(5);
export const getRandom10Letters = (): string => getRandomLetters(10);

/**
 * Выбор случайного элемента массива
 * @param {Array} array
 * @return {Any} Случайный элемент массива
 */
export function getRandomElement<A>(array: A[]): A {
  const randomIndex = getRandomNumber(0, array.length - 1);

  return array[randomIndex];
}

/**
 * Генерация случайного значения true\false
 * @return {Boolean}
 */
export const getRandomBoolean = (): boolean => Boolean(getRandomNumber(0, 1));


/**
 * Возвращает перемешанный массив в случайном порядке
 * @param {Array} arr
 * @return {Array}
 */
export function getMixedArray<A>(arr: A[]): A[] {
  const newArr = [];
  let
    oldArr = [...arr],
    randomIdx: number;

  while (oldArr && oldArr.length) {
    randomIdx = getRandomNumber(0, oldArr.length - 1);
    newArr.push(oldArr[randomIdx]);
    oldArr = [...oldArr.slice(0, randomIdx), ...oldArr.slice(randomIdx + 1)];
  }

  return newArr;
}
