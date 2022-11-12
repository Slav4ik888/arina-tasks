
export function arrFromObjWithKey(obj) {
  let arr = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newObj = {
        key: [key],
        ...obj[key]
      }
      arr.push(newObj);
    }
  }
  return arr;
};
