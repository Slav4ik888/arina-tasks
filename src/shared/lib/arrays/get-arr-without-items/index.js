
function isValid(item, field, values) {
  let result = true;

  values.forEach(value => {
    if (item[field] === value) result = false
  });

  return result;
}


export function getArrWithoutItems(arr, field, values) {
  if (!arr?.length || !field || !values?.length) return arr;
  
  return arr.filter(item => isValid(item, field, values))

};
