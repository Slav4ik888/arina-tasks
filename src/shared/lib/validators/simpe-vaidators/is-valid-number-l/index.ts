/**
 * Возвращает true если строка с цифрами установленного значения length
 */
export const isValidNumberL = (
  length: number,
  strNum: string // стока из цифр
): boolean => {
  if (strNum === undefined) return false;
  if (typeof strNum !== 'string') return false;
  if (
    strNum.replace(/\D/, '').length !== strNum.length ||
    strNum.replace(/\D/, '').length !== length
  ) return false;

  return true;
};

export const isValidNumberL7  = (str: any): boolean => isValidNumberL(7, str);
export const isValidNumberL20 = (str: any): boolean => isValidNumberL(20, str);

export const noValidNumberL7  = (str: any): boolean => !isValidNumberL(7, str);
export const noValidNumberL20 = (str: any): boolean => !isValidNumberL(20, str);
