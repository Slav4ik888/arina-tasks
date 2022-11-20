
/** Returns true if arr is Array */
export function isArr<A>(arr: A[]): boolean {
  return Array.isArray(arr);
}

export function noArr<A>(arr: A[]): boolean {
  return !isArr(arr);
}
