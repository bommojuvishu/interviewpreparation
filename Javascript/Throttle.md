### ✅ 1. **Throttle Function**

```js
export default function throttle(func, wait) {
  let execute = true
  return function (...args) {
    if execute {
      func.apply(this, args)
      execute  =false
      setTimeout(()=> {
        execute = true

      }, wait )
    }
  }
}
```
