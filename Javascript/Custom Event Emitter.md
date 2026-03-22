# Simple Custom EventEmitter (Interview Style)

Node.js simply provides a built-in implementation, but the concept itself is just a data structure + callbacks, so you can build it yourself easily.

This is actually a very common JavaScript interview problem.

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((cb) => cb(...args));
  }
}

const emitter = new EventEmitter();

emitter.on("hello", (name) => console.log(`Hello ${name}`));

emitter.emit("hello", "Vishwanath");
```
