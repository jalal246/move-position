# move-position

> Move element in given array form index-A to index-B :scissors:

```bash
npm install move-position
```

## API

### move

Moves element form one index to another

```js
move(targetedArr: Array, from: number, to: number, isMutate?: boolean)
```

#### Example - Mutate true

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

#### Example - Mutate false

```js
const result = move(input, 0, 2, false);

input === result; // false
```

### moveMultiArr

Moves the same index in multiple arrays

```js
moveMultiArr(targetedArr: Array<Array>, from: number, to: number, isMutate?: boolean)
```

#### Example - Move Multiple Arrays

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

#### Example - Move Multiple Index

```js
const input = ["a", "b", "c"];

const movingMap = [
  { from: 0, to: 2 },
  { from: 2, to: 1 },
];

const result = moveMultiIndex(input, movingMap);

// result = ["a", "c", "a"];
```

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/move-position/blob/master/LICENSE)

### Related projects

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [builderz](https://github.com/jalal246/builderz) - Building your project with zero config.

- [corename](https://github.com/jalal246/corename) - Extracts package name.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for
  projects production.

- [textics](https://github.com/jalal246/textics) &
  [textics-stream](https://github.com/jalal246/textics-stream) - Counts lines,
  words, chars and spaces for a given string.

- [folo](https://github.com/jalal246/folo) - Form & Layout Components Built with
  React.
