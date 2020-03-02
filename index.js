function isNotInRange(arr, from, to) {
  const { length } = arr;

  return (
    typeof from !== "number" ||
    typeof to !== "number" ||
    from < 0 ||
    to < 0 ||
    to > length ||
    from > length
  );
}

function move(arr = [], from, to, isMutate = true) {
  if (isNotInRange(arr, from, to)) return arr;

  const modified = isMutate ? arr : arr.slice();

  modified.splice(to, 0, modified.splice(from, 1)[0]);

  return modified;
}

function moveMultiple(multiArr, from, to, isMutate) {
  return multiArr.map(arr => move(arr, from, to, isMutate));
}

module.exports = {
  move,
  moveMultiple
};
