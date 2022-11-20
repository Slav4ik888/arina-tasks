/** Проверяем хватит ли кол-ва примеров, чтобы вывести без дубликатов */
export const isEnough = (
  amount : number,
  min    : number,
  max    : number
): boolean => {
  const maxAmount = (max - min + 1) * (max - min + 1);

  if (maxAmount < amount) return false

  console.log(`Не проверяем на дубли так как выбрано мало кол-ва примеров: `);
  return true;
};
