
/** Вывод ошибки в консоль */
// eslint-disable-next-line no-console
const showError = (text: string, fieldName: string) => console.log(`${text}: ${fieldName}`);


/**
 * Проверка на ошибку
 * Вывод ошибки
 * Ответ есть ли ошибка - true при наличии
 */
const checkError = (data: unknown, fieldName: string) => {
  if (!data) {
    showError('Не указано значение', fieldName);
    return true;
  }
  return false;
};


const PREFIX = 'ArinaTasks-';

const getStorage = (storageName: string) => PREFIX + storageName;


/** Сохраняем в LocalStorage */
export const setStorageData = (storageName: string, data: unknown) => {
  if (checkError(storageName, '"Имя хранилища"')) return;
  if (checkError(data, '"Данные для сохранения"')) return;

  localStorage.setItem(getStorage(storageName), JSON.stringify(data));
};


/** Достаём из LocalStorage */
export function getStorageData(storageName: string): unknown {
  if (checkError(storageName, '"Имя хранилища"')) return undefined;

  const data = localStorage.getItem(getStorage(storageName));
  if (data) return JSON.parse(data);
  return undefined;
}

/** Clear item by storageName */
export const removeStorageData = (storageName: string) => {
  if (checkError(storageName, '"Имя хранилища"')) return;

  localStorage.removeItem(getStorage(storageName));
};
