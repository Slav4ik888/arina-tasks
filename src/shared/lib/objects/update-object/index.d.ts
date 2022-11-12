
// Возвращает новый объект lastItem с обновлёнными полями
export function updateObject<T extends object, O extends Partial<T>>(lastObj: T, updatedFields: O): T;
