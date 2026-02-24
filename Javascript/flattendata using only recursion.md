# Flatten data

❌ No for

❌ No while

❌ No map, reduce, flat

❌ No helper function

✅ Only recursion

```js
const flatten = (arr) =>
  arr.length === 0
    ? []
    : Array.isArray(arr[0])
      ? flatten(arr[0]).concat(flatten(arr.slice(1)))
      : [arr[0]].concat(flatten(arr.slice(1)));

const data = [1, [2, [3, 4], 5], 6];

console.log(flatten(data));
// [1, 2, 3, 4, 5, 6]
```

- how it executes

```
[1, [2, [3, 4], 5], 6]
 → 1 + flatten([[2, [3,4],5],6])
 → 1 + flatten([2, [3,4],5]) + flatten([6])
 → ...
```
