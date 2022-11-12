
declare function isValid<A extends object>(item: A, field: string, values: string[]): boolean;
export function getArrWithoutItems<A extends object>(arr: A[], field: string, values: string[]): A[];
