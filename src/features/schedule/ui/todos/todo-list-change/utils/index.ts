export function createId<A extends { id: number }>(arr: Array<A>): number {
  let maxId = 1;
  if (arr && arr.length) {
    arr.forEach((item) => {
      if (item.id >= maxId) {
        maxId = +item.id + 1;
      }
    });
  }
  // console.log('maxId: ', String(maxId));
  return maxId;
};
