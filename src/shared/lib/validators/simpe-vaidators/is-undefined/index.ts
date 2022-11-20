
export function isUndefined<T> (obj: T): boolean { return typeof obj === 'undefined'; };
export function noUndefined<T> (obj: T): boolean { return !isUndefined(obj); };
