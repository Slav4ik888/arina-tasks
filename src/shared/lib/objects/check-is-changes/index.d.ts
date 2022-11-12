/**
 * Проверяет были ли изменения в новом объекте
 * @param prevObj - первоначальный объект
 * @param newObj  - новый объект
 */
export function checkIsChanges<T>(prevObj: T, newObj: T): boolean;