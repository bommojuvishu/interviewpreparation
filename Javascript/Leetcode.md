### snippet : closure

due to the closure you can refer the init in the arrow ,but not object properties like "value"
you need the regular function using the "this" to access

```js
var createCounter = function (init) {
  return {
    value: init,
    increment: () => {
      console.log("uincrement", init);
    },
    decrement: () => {
      console.log("decrement", value); // Uncaught ReferenceError: value is not defined"
    },
    reset: function () {
      console.log("reset ", this.value);
    },
  };
};
```
