# move-position

> move element in given array form index-A to index-B :scissors:

```bash
npm install move-position
```

## move

```js
/**
 * Moves element form/to index.
 *
 * @param {Array} [arr=[]]
 * @param {number} from
 * @param {number} to
 * @param {boolean} [isMutate=true]
 * @returns {Array}
 */
const modifiedArr = move(arr, from, to, isMutate);
```

### Example(1)

```js
const input = ["a", "b", "c"];

// move element form index:0 to index:2
const result = move(input, 0, 2);

// ["b", "c", "a"];
```

## moveMultiArr

```js
/**
 * Moves the same index in multiple arrays
 *
 * @param {Array} [arr=[]] Array contain arrays to be changed
 * @param {number} from - targeted index
 * @param {number} to - targeted index
 * @param {boolean} [isMutate=true]
 * @returns {Array}
 */
const modifiedArr = moveMultiArr([arr1, arr2, ...], from, to, isMutate);
```

### Example(2)

```js
const input1 = ["a1", "b1", "c1"];
const input2 = ["a2", "b2", "c2"];

const allInputs = [input1, input2];

const result = moveMultiArr(allInputs, 2, 0);

// result[0] > ["c1", "a1", "b1"];
// result[1] > ["c2", "a2", "b2"];
```

## moveMultiIndex

```js
/**
 * Moves multiple indexes in the same array.
 *
 * @param {Array} [arr=[]]
 * @param {{ from, to }[]} movingMap
 * @returns {Array} new Array with index changes
 */
const modifiedArr = moveMultiIndex(arr, [{from, to}, ...]);
```

### Example(3)

```js
const input = ["a", "b", "c"];

const movingMap = [
  { from: 0, to: 2 },
  { from: 2, to: 1 }
];

const result = moveMultiIndex(input, movingMap);

// result > [ 'a', 'c', 'a' ]
```

### Related projects

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [builderz](https://github.com/jalal246/builderz) - Building your project with zero config.

- [corename](https://github.com/jalal246/corename) - Extracts package name.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for
  projects production.

- [textics](https://github.com/jalal246/textics) & [textics-stream](https://github.com/jalal246/textics-stream) - Counts lines, words, chars and spaces for a given string.

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/move-position/blob/master/LICENSE)
