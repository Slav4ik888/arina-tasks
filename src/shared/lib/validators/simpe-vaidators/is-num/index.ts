
export const isNum = (num: any): boolean =>
  typeof num === 'number' &&
  !isNaN(num);

export const noNum = (num: any): boolean => !isNum(num);
