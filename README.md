# move-position

> Move element in a given array from one index to another ..with some extra
> functions.

```bash
npm install move-position
```

## API

- [move](#move)
- [getDiff](#getDiff)
- [compareBoth](#compareBoth)
- [flatten](#flatten)
- [toArray](#toArray)

## move

> Moves element form one index to another with ability to fill each position and
> mutate the input array.

```js
function move<T>(
  arr: T[] = [],
  movingMap: ArrayRange | ArrayRange[],
  Opts<T> = {}
)
```

- `ArrayRange` object contains:

  - `from: number` - Target index.
  - `to: number` - Destination index.

- `Opts` object contains:

  - `isMutate?: boolean` - Default `true` - Mutate array input or create new one.
  - `isDuplicate?: boolean` - Default `false` - Duplicate the traveled element or not.
  - `isSwap?: boolean` - Default `false` - Swap between array elements.
  - `fill?: T` - Fill the original position with a value.

### Example - `move`

Trying default options:

```js
const INPUT = ["first", "second", "third", "fourth"];

const movingMap = [{ from: 0, to: 3 }];
const result = move(INPUT, movingMap);

>> result= ["fourth", "second", "third", "first"];
```

Enables `isDuplicate:true`:

```js
const INPUT = ["first", "second", "third", "fourth"];

const movingMap = [{ from: 0, to: 3 }];
const result = move(INPUT, movingMap, { isDuplicate: true });

//
>> result= ["first", "second", "third", "first"];
```

With nullish:

```js
const INPUT = ["first", "second", "third", "fourth"];

const movingMap = [{ from: 0, to: 3 }];
const result = move(INPUT, movingMap, {
  isDuplicate: false,
  isSwap: false,
});

>> result = [null, "second", "third", "first"];
```

With custom fill:

```js
const INPUT = ["first", "second", "third", "fourth"];

const movingMap = [{ from: 0, to: 3 }];
const result = move(INPUT, movingMap, {
  fill: "emptiness"
});

>> result = ["emptiness", "second", "third", "first"];
```

## compare

> Compare elements of the first array with the rest of arrays.

```js
function compare<T>(...args: T[][])
```

### Example - `compare`

```js
const diff = compare(["a", "b", "c"], ["b", "c", "e"]);

> diff = ["a"]
```

## compareBoth

> Compare elements in all inputs and gets the difference.

```js
function compareBoth<T>(...args: T[][])
```

### Example - `compareBoth`

```js
const allDiff = compareBoth(["a", "b", "c"], ["b", "c", "e"]);

> allDiff = ["a", "e"]
```

## flatten

> Flatten an array

```js
function flatten<T>(unFlatten: T[])
```

### Example - `flatten`

```js
const flattened = flatten([[1, [2, 3]], [1, [2, 3]], 0]);

> flattened = [1, 2, 3, 1, 2, 3, 0]
```

## toArray

> Convert an input to array

```js
function flatten<T>(unFlatten: T[])
```

### Example - `toArray`

```js
const array = toArray("a");

> array = ["a"]
```

## Tests

```sh
npm test
```

## License

This project is licensed under the [MIT](https://github.com/jalal246/move-position/blob/master/LICENSE)

### Related projects

- [builderz](https://github.com/jalal246/builderz) - Zero Configuration JS bundler.

- [validate-access](https://github.com/jalal246/https://github.com/jalal246/validate-access) - Utility functions, parse and validate a given directory with multiple entries.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for projects production.

- [textics](https://github.com/jalal246/textics) &
  [textics-stream](https://github.com/jalal246/textics-stream) - Counts lines,
  words, chars and spaces for a given string.

> Support this package by giving it a Star ⭐
