
/**
 * Default
 */
const validate = (entities, field, value, id) => entities[id]?.[field] === value;

/**
 * If entities[id][field] is array
 */
const includesValidate = (entities, field, value, id) => entities[id]?.[field]?.includes(value);

/**
 * Check by one of in Value
 */
const valueIsArray = (entities, field, value, id) => value.includes(entities[id]?.[field]);
  
/**
 * For recived validFunc
 */
const validatorFunc = (entities, field, _, id, validFunc) => validFunc(entities[id]?.[field]);


const getValidator = (value, includes, validFunc) => validFunc
  ? validatorFunc
  : Array.isArray(value)
      ? valueIsArray
      : includes
          ? includesValidate
          : validate;
  

  
export function filterEntsByField(entities, field, value, includes, validFunc) {
  let ents = {};
  if (!field || typeof value === `undefined`) return ents;

  const validator = getValidator(value, includes, validFunc);

  for (let id in entities) {
    if (Object.prototype.hasOwnProperty.call(entities, id)) {
      if (validator(entities, field, value, id, validFunc)) ents[id] = entities[id];
    }
  }

  return ents;
};
