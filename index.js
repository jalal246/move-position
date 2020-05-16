/**
 * validator
 *
 * @param {Array} arr - array to validate
 * @param {number} from - targeted index
 * @param {number} to - targeted index
 * @returns
 */
function isNotInRange(arr, { from, to } = {}) {
  const { length } = arr;

  return (
    !Array.isArray(arr) ||
    typeof from !== "number" ||
    typeof to !== "number" ||
    from < 0 ||
    to < 0 ||
    to > length ||
    from > length
  );
}

function isValid(arr, form2Obj) {
  return !isNotInRange.call(this, arr, form2Obj);
}

/**
 * Moves element form/to index.
 *
 * @param {Array} [arr=[]]
 * @param {number} from
 * @param {number} to
 * @param {boolean} [isMutate=true]
 * @returns {Array}
 */
function move(arr = [], from, to, isMutate = true) {
  if (isNotInRange(arr, { from, to })) return arr;

  const modified = isMutate ? arr : arr.slice();

  modified.splice(to, 0, modified.splice(from, 1)[0]);

  return modified;
}

/**
 * Moves the same index in multiple arrays
 *
 * @param {Array} [arr=[]] Array contain arrays to be changed
 * @param {number} from - targeted index
 * @param {number} to - targeted index
 * @param {boolean} [isMutate=true]
 * @returns {Array}
 */
function moveMultiArr(multiArr, from, to, isMutate) {
  return multiArr.map((arr) => move(arr, from, to, isMutate));
}

/**
 * Moves multiple indexes in the same array.
 *
 * @param {Array} [arr=[]]
 * @param {{ from, to }[]} movingMap
 * @returns {Array} new Array with index changes
 */
function moveMultiIndex(arr = [], movingMap) {
  const modified = arr.slice();

  movingMap.forEach(({ from, to }) => {
    modified[to] = arr[from];
  });

  return modified;
}

module.exports = {
  isValid,
  move,
  moveMultiArr,
  moveMultiIndex,
};
