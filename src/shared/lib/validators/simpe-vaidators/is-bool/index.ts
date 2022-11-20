
export const isBool = (bool: any): boolean => typeof bool === 'boolean';
export const noBool = (bool: any): boolean => !isBool(bool);
