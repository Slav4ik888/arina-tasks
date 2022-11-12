
interface Entities<O extends object> {
  [id: string]: O
}

/**
 * Filter entities by field and value - entities[id][field] === value
 * @param ents
 * @param field     - field for filter
 * @param value     - checked value
 * @param includes  - if entities[id][field] is array
 * @param validFunc 
 */
export function filterEntsByField<O extends object, T>(
  ents       : Entities<O>,
  field      : string,
  value      : T | T[],
  includes?  : boolean,
  validFunc? : Function
): Entities<O>;
