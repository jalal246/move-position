interface ArrayRange {
  from: number;
  to: number;
}

interface MoveOpts extends ArrayRange {
  isMutate?: boolean;
}

/**
 * Converts input to an array
 *
 * @param input
 */
function toArray<T>(input: T | T[]) {
  if (input === null || input === undefined) {
    return [];
  }

  return Array.isArray(input) ? input : [input];
}

/**
 * Validate array and its range.
 *
 * @param arr
 * @param arrayRangeObj
 */
function isValid<T>(arr: T[], { from, to }: ArrayRange) {
  return (
    Array.isArray(arr) &&
    typeof from === "number" &&
    typeof to === "number" &&
    from >= 0 &&
    to >= 0 &&
    from < arr.length &&
    to < arr.length
  );
}

/**
 * Moves element form/to index.
 *
 * @param arr
 * @param opts
 */
function move<T>(arr: T[] = [], { from, to, isMutate = true }: MoveOpts) {
  if (!isValid(arr, { from, to })) {
    throw new Error(`Input:is not valid!`);
  }

  const modified = isMutate ? arr : arr.slice();

  modified.splice(to, 0, modified.splice(from, 1)[0]);

  return modified;
}

interface moveMultiIndexOpts<T> {
  isMutate?: boolean;
  isDuplicate?: boolean;
  isSwap?: boolean;
  fill?: T;
}

/**
 * Moves multiple indexes in the same array
 *
 * @param arr
 * @param movingMap
 * @param opts
 */
function moveMultiIndex<T>(
  arr: T[] = [],
  movingMap: ArrayRange[],
  {
    isMutate = false,
    isDuplicate = true,
    isSwap = false,
    fill,
  }: moveMultiIndexOpts<T> = {}
) {
  const modified = isMutate ? arr : arr.slice();

  movingMap.forEach(({ from, to }) => {
    const draft = modified[to];
    modified[to] = arr[from];

    if (isSwap) {
      modified[to] = arr[from];
      modified[from] = draft;
    } else if (fill) {
      modified[from] = fill;
    } else if (!isDuplicate) {
      // @ts-expect-error
      modified[from] = null;
    }
  });

  return modified;
}

/**
 * Moves the same index in multiple arrays
 *
 * @param multiArr
 * @param param1
 */
function moveMultiArr<T>(multiArr: T[][], { from, to, isMutate }: MoveOpts) {
  return multiArr.map((arr: T[]) => move<T>(arr, { from, to, isMutate }));
}

export = {
  toArray,
  isValid,
  move,
  moveMultiArr,
  moveMultiIndex,
};
