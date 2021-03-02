interface ArrayRange {
  from: number;
  to: number;
}

interface MoveOpts<T> {
  isMutate?: boolean;
  isDuplicate?: boolean;
  isSwap?: boolean;
  fill?: T;
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

// /**
//  * Validate array and its range.
//  *
//  * @param arr
//  * @param arrayRangeObj
//  */
// function isValid<T>(arr: T[], { from, to }: ArrayRange) {
//   return (
//     Array.isArray(arr) &&
//     typeof from === "number" &&
//     typeof to === "number" &&
//     from >= 0 &&
//     to >= 0 &&
//     from < arr.length &&
//     to < arr.length
//   );
// }

// /**
//  * Moves element form/to index.
//  *
//  * @param arr
//  * @param opts
//  */
// function move<T>(arr: T[] = [], { from, to, isMutate = true }: MoveOpts) {
//   if (!isValid(arr, { from, to })) {
//     throw new Error(`Input:is not valid!`);
//   }

//   const modified = isMutate ? arr : arr.slice();

//   modified.splice(to, 0, modified.splice(from, 1)[0]);

//   return modified;
// }

/**
 * Moves multiple indexes in the same array
 *
 * @param arr
 * @param movingMap
 * @param opts
 */
function move<T>(
  arr: T[] = [],
  movingMap: ArrayRange | ArrayRange[],
  {
    isMutate = false,
    isDuplicate = true,
    isSwap = false,
    fill,
  }: MoveOpts<T> = {}
) {
  const modified = isMutate ? arr : arr.slice();

  const mapping = toArray(movingMap);

  mapping.forEach(({ from, to }) => {
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
 *
 * @param unFlatten
 */
function flatten<T>(unFlatten: T[] = []) {
  const flat: T[] = [];

  function flattenRec(arr: T[]) {
    arr.forEach((elm) => {
      if (!Array.isArray(elm)) {
        flat.push(elm);
      } else {
        flattenRec(elm);
      }
    });

    return flat;
  }

  return flattenRec(unFlatten);
}

// function diff(arr /* , arrays */) {
//   const len = arguments.length;
//   let idx = 0;
//   while (++idx < len) {
//     arr = diffArray(arr, arguments[idx]);
//   }
//   return arr;
// }

function getDiff<T>(arr1: T[], arr2: T[]) {
  const arrDiff = [];

  for (let i = 0; i < arr1.length; i += 1) {
    const elm = arr1[i];

    for (let j = 0; j < arr2.length; j += 1) {
      if (elm === arr2[j]) break;

      arrDiff.push(elm);
    }
  }

  return arrDiff;
}

export = {
  getDiff,
  flatten,
  toArray,
  move,
};
