# move-position

> Move element in a given array from one Index to another. It can be implemented for one array or multiple arrays with multiple indexes.

```bash
npm install move-position
```

## API

### move

Moves element form one index to another

```js
move(targetedArr: Array, from: number, to: number, isMutate?: boolean)
```

If mutate true:

```js
const input = ["a", "b", "c"];

// move element form index=0, to index=2
const result = move(input, 0, 2);

// ["b", "c", "a"];
```

Since `isMutate` is `true` by default:

```js
input === result; // true
```

When mutate is false:

```js
const result = move(input, 0, 2, false);

input === result; // false
```

### moveMultiArr

Moves the same index in multiple arrays

```js
moveMultiArr(targetedArr: Array<Array>, from: number, to: number, isMutate?: boolean)
```

Iteration through multiple arrays can easily be done with one step only as following:

```js
const input1 = ["a1", "b1", "c1"];
const input2 = ["a2", "b2", "c2"];

const result = moveMultiArr([input1, input2], 2, 0);

// result = [
//   ["c1", "a1", "b1"],
//   ["c2", "a2", "b2"],
// ];
```

### moveMultiIndex

```ts
moveMultiArr(targetedArr: Array, movingMap: Array <FromToObj>)
```

Think about `FromToObj` as a map helps to navigate each element to its new position:

```js
const input = ["a", "b", "c"];

const FromToObj = [
  { from: 0, to: 2 },
  { from: 2, to: 1 },
];

const result = moveMultiIndex(input, FromToObj);

// result = ["a", "c", "a"];
```

Validation functions is also exported `isValid(array, { from, to })` and it
returns `false` when:

- input is not array
- input array is empty
- from/to is out of range
- from/to is not numbers

```js
isValid([1, 2, 3], { from: 0, to: 1 });

// true

isValid([1, 2, 3], { from: 10, to: 1 });

// false
```

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/move-position/blob/master/LICENSE)
