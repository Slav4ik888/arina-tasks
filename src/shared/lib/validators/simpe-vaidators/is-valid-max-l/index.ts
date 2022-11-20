import { noStr } from '../is-str';

/**
 * True  if str <= maxLength
 * False if not string | > maxLength
 */
export const isValidMaxL = (maxLength: number, str: string): boolean => {
  if (!str && noStr(str)) return false;
  if (str?.length < maxLength || str?.length === maxLength) return true;

  return false // console.log(`Нет совпадений по условиям...`);
};

export const isValidMaxL30   = (str: string): boolean => isValidMaxL(30, str);
export const isValidMaxL50   = (str: string): boolean => isValidMaxL(50, str);
export const isValidMaxL100  = (str: string): boolean => isValidMaxL(100, str);
export const isValidMaxL300  = (str: string): boolean => isValidMaxL(300, str);
export const isValidMaxL1000 = (str: string): boolean => isValidMaxL(1000, str);

export const noValidMaxL30   = (str: string): boolean => !isValidMaxL(30, str);
export const noValidMaxL50   = (str: string): boolean => !isValidMaxL(50, str);
export const noValidMaxL100  = (str: string): boolean => !isValidMaxL(100, str);
export const noValidMaxL300  = (str: string): boolean => !isValidMaxL(300, str);
export const noValidMaxL1000 = (str: string): boolean => !isValidMaxL(1000, str);
