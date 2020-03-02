# move-position

> move element in given array form position A to position B :scissors:

```bash
npm install move-position
```

## move

```js
/**
 * Move element form/to
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
const input = ["a1", "b1", "c1"];

// move element form index:0 to index:2
const result = move(input, 0, 2);

// ["b1", "c1", "a1"];
```

## moveMultiple

```js
const modifiedArr = moveMultiple([arr1, arr2], from, to, isMutate);
```

### Example(2)

```js
const input1 = ["a1", "b1", "c1"];
const input2 = ["a2", "b2", "c2"];

const total = [input1, input2];

const result = moveMultiple(total, 2, 0);

// result[0] > ["c1", "a1", "b1"];
// result[1] > ["c2", "a2", "b2"];
```

### Related projects

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [builderz](https://github.com/jalal246/builderz) - Building your project with zero config.

- [corename](https://github.com/jalal246/corename) - Extracts package name.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for projects production.

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/move-position/blob/master/LICENSE)
