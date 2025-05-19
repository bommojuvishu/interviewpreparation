# Javascript

- [Javascript](#Javascript)

## Interview questions

- How does cors work in the browser?
- what is memory leaking?
- what is preflight request?

## JS important points

- JavaScript evaluates expressions from left to right, considering operator precedence
- Everything in JS is either primitive or object
- const and let are block scope , but var is not
- functions are treated as variables
- scope chaining : will look for variables from child to parent but not other way
- this keyword always points to the object that is calling the method
- closures always have access to the variables in the execution context where it is created . by this way we can create private variables
- every object in javascript has the prototype and JS looks functions or / variable from function object and then prototype , this is prototype chaining
- 3 ways to implement the prototypical inheritance :
  - constructor functions
  - es6 classes
  - Object.create()
- const jonas = new Person('Jonas',1991)
  1. New {} is created
  2. function is called , this ={}
  3. {} linked to protytpe
  4. function automatically return {}
- pass by value : primitive data types , pass by reference : objects and arrays
- If you want to preserve something across function calls: declare it outside (in the closure) - run once

  ````javascript
  function once(fn) {
  let called = false;
  return function (...args) {
  if (!called) {
  called = true;
  return fn.apply(this, args);
  }
  };
  }

      ```
  ````

# Arrays methods

- length

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
```

- push

```javascript
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
```

- push

```javascript
// At position 2, add 2 elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//At position 2, remove 2 items:
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
```

- isArray

```javascript
Array.isArray(fruits);
```

- join

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");
//Banana * Orange * Apple * Mango
```

- pop

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
```

- delete

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
```

- indexOf

```javascript
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
```

- includes

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");
```

- sort

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
```

- numeric sort

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
```

- map

```javascript
const list = [1, 2, 3, 4];
list.map((el) => el * 2); // [2, 4, 6, 8]
```

- sort

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
```

-JSON iterate

```javascript
const jsonObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Iterating over the keys using object.key syntax
console.log(Object.keys(jsonObj));
```

# String methods

- length

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

- charAt

```javascript
let text = "HELLO WORLD";
let char = text.charAt(0);
```

- indexOf

```javascript
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
```

- includes

```javascript
let text = "Hello world, welcome to the universe.";
text.includes("world");
```

## Primitives

basic data types that are not composed of other data types. They are the simplest building blocks of data. In JavaScript, there are six primitive types

- Number
- String
- Boolean
- Undefined
- Null
- Symbol

## Javascript Concepts

### call, apply, bind :

Using the call method, we can invoke a function, by passing a value that will be treated as this inside it.

apply — in the case of apply, the additional arguments will be passed as an array.

```javascript
function test() {
  console.log(this.name);
}

const obj = { name: "vishu" };
const obj2 = { name: "arun" };

test.call(obj);
arunfun = test.bind(obj2);

arunfun();
```

bind() :Unlike call and apply method, bind will not invoke the function directly, instead, it changes this value inside the function and returns the changed function instance.

```javascript
function sayHello() {
  console.log(this.name);
}

const obj = { name: "peter" };
const newFunc = sayHello.bind(obj); // it won't invoke, it just returns back the new function instance
newFunc(); // peter
```

_closure_ : A closure in JavaScript is a function that has access to the variables in its parent scope, even after the parent function has returned. Closures are created whenever a function is defined inside another function.

```javascript
function outerFunction(x) {
  function innerFunction() {
    console.log(x);
  }
  return innerFunction;
}

let myClosure = outerFunction(10);
myClosure(); // logs 10
```

Closures are commonly used in JavaScript to:

- Create private variables and functions
- Create a function with some pre-defined/preserved state
- Implement functional programming concepts like currying or memoization
- To create a function factory
- To create a function that can be passed around and executed later

### Hoisting

Hoisting is a mechanism where variable and function declarations are moved to the top of the scope in which they are defined. This means that variables and functions can be used before they are declared in the code.

Function declarations use the function keyword. Unlike function expressions, function declarations have both the declaration and definition hoisted, thus they can be called even before they are declared.

```javascript
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'

function foo() {
  console.log("FOOOOO");
}
```

import statement too

```javascript
foo.doSomething(); // Works normally.

import foo from "./modules/foo";
```

### Using rest parameters (...args) (modern, preferred way)

Works in both regular and arrow functions. It explicitly captures all parameters into an array.

```javascript
const modernStyle = (...args) => {
  console.log(args); // real array
};
modernStyle(1, 2, 3); // logs [1, 2, 3]
```

## 3 ways to create object

- Object Literal notation:

```javascript
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
```

- Constructor Function:

```JavaScript
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

let person1 = new Person("John", 30, "Developer");
```

- Object.create() method:

```javascript
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

let person1 = Object.create(person);
```

function Person(name, age, occupation) {

}
let person1 = new Person("John", 30, "Developer");

1. New {} is created
2. function is called , this. ={}
3. this is linked to prototype
4. function automatically return {}

Note : don't create function inside another function , always create the function at the prototype level because it will create n number of duplicate methods for the n number of objects

#### Explain the difference between let, var and const in JavaScript.\_

var: they are only accessible within the function in which they are defined. If a variable is declared with var outside of any function, it is accessible throughout the entire script and is known as a global variable. Variables declared with var are also hoisted to the top of the scope, which means they can be used before they are declared.
\*var are function scoped

let: Variables declared with the let keyword are block-scoped, which means they are only accessible within the block in which they are defined. This includes blocks defined by if statements, for loops, and while loops. Variables declared with let are not hoisted to the top of the scope, and will cause ReferenceError if accessed before they are declared.

const: Variables declared with the const keyword are also block-scoped like let variables, but they cannot be reassigned after they are declared. Constants are also not hoisted to the top of the scope, and will cause ReferenceError if accessed before they are declared.
\*let and const are block scoped

```javascript
function myFunction() {
  if (true) {
    var x = 5;
    let y = 10;
    const z = 15;
  }
  console.log(x); // 5
  console.log(y); // ReferenceError
  console.log(z); // ReferenceError
}
myFunction();
console.log(x); // 5
console.log(y); // ReferenceError
console.log(z); // ReferenceError
```

## Promise

JavaScript promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a way to register callbacks that are executed when the promise is fulfilled or rejected, making it easier to handle asynchronous code in a more synchronous way.

- The then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case.

-

```javascript
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello, World!");
  }, 1000);
});

promise
  .then(function (value) {
    console.log(value); // 'Hello, World!'
  })
  .catch(function (error) {
    console.log(error);
  });
```

Before Promise : Callback hell

```javascript
function getFirstData(callback) {
  setTimeout(() => {
    callback({ id: 1, title: "First Data" });
  }, 1000);
}

function getSecondData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + " Second Data" });
  }, 1000);
}

function getThirdData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + " Third Data" });
  }, 1000);
}

// Callback hell
getFirstData((data) => {
  getSecondData(data, (data) => {
    getThirdData(data, (result) => {
      console.log(result); // Output: {id: 1, title: "First Data Second Data Third Data"}
    });
  });
});
```

After implementing promises

```javascript
// Example of sequential asynchronous code using setTimeout and Promises
function getFirstData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: "First Data" });
    }, 1000);
  });
}

function getSecondData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + " Second Data" });
    }, 1000);
  });
}

function getThirdData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + " Third Data" });
    }, 1000);
  });
}

getFirstData()
  .then(getSecondData)
  .then(getThirdData)
  .then((data) => {
    console.log(data); // Output: {id: 1, title: "First Data Second Data Third Data"}
  })
  .catch((error) => console.error("Error:", error));
```

### 🔹 Why Use `Promise.resolve()` in `promiseAny`

When implementing a `promiseAny` function, input values may be either Promises or plain values (e.g., numbers, strings). Plain values don’t have a `.then()` method, so directly calling `.then()` will throw an error.

✅ `Promise.resolve(value)` ensures the value is safely treated as a Promise, allowing uniform `.then()` usage.

---

### ✅ Example

```js
async function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let pending = iterable.length;

    for (let item of iterable) {
      Promise.resolve(item)
        .then(resolve)
        .catch((err) => {
          errors.push(err);
          if (--pending === 0) reject(errors);
        });
    }
  });
}

// Usage
async function main() {
  const res = await promiseAny([2, Promise.reject("fail")]);
  console.log("RES:", res); // RES: 2
}

main();
```

---

> 🔸 Without `Promise.resolve()`, `.then()` would throw if the value is not already a Promise.

4o

---

## Async await

The await keyword can only be used inside an async function.
The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

```javascript
const fun1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello  1second ");
    resolve("status");
  }, 1000);
});

//  promise example
fun1
  .then((data) => console.log("success", data))
  .catch((error) => console.log("error:", error));

async function fun2() {
  const resp = await fun1();
  console.log("ASYNC", resp);
  return resp;
}

console.log();
// async await example
fun2().then((data) => console.log("success :", data));
```

## Types of Promises

A Promise is in one of these states:
pending:
fulfilled:
rejected:

## 1️⃣ `Promise.all()` – **Wait for all promises (fail if one fails)**

✅ Resolves when **all** promises succeed.  
❌ Rejects immediately if **any** promise fails.

```js
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("Error!");

Promise.all([p1, p2, p3])
  .then(console.log) // ❌ Won't execute
  .catch(console.error); // 🚨 "Error!"
```

🔹 **Use case**: Fetching **multiple APIs** where all responses are required.

## 2️⃣ `Promise.allSettled()` – **Wait for all, never fail**

✅ Always resolves, even if some promises fail.  
🔹 Returns **both fulfilled and rejected results**.

```
const p1 = Promise.resolve("A");
const p2 = Promise.reject("Error!");
const p3 = Promise.resolve("C");

Promise.allSettled([p1, p2, p3]).then(console.log);

//output
[
  { status: "fulfilled", value: "A" },
  { status: "rejected", reason: "Error!" },
  { status: "fulfilled", value: "C" }
]

```

🔹 **Use case**: Running **multiple independent tasks** and handling errors separately.

## 3️⃣ `Promise.any()` – **First success wins**

✅ Resolves with **first fulfilled promise**.  
❌ Rejects **only if all** promises fail (`AggregateError`).

```js
const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.reject("Fail 3");

Promise.any([p1, p2, p3])
  .then(console.log) // ✅ "Success 2"
  .catch(console.error);
```

🔹 **Use case**: **Fastest successful response** (e.g., multiple redundant API calls).

## 4️⃣ `Promise.race()` – **First settled wins (success or failure)**

✅ Resolves or rejects **with the first settled promise**.

```js
const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Error!"), 500));

Promise.race([p1, p2])
  .then(console.log) // ❌ Won't execute
  .catch(console.error); // 🚨 "Error!"
```

🔹 **Use case**: **Timeout mechanism** (fastest response matters).

### 🏆 **Which One Should You Use?**

Scenario

Best Choice

**All tasks must succeed**

`Promise.all()`

**Run all tasks, collect all results**

`Promise.allSettled()`

**Get the first successful result**

`Promise.any()`

**Get the fastest result, success or failure**

`Promise.race()`

```javascript
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

## Currying

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument.

```javascript
// Original function with multiple arguments
function multiply(a, b, c) {
  return a * b * c;
}

// Curried version of the function
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// Using the curried function
console.log(curriedMultiply(2)(3)(4)); // Output: 24

// Currying using arrow functions
const curriedAdd = (a) => (b) => (c) => a + b + c;
console.log(curriedAdd(2)(3)(4)); // Output: 9
```

## Partial Application

- You create a new function by fixing one or more arguments of the original function, leaving the remaining arguments to be supplied later.
- The resulting function takes fewer arguments than the original function but retains some of the arguments' values fixed.

```javascript
// Original function with multiple arguments
function multiply(a, b, c) {
  return a * b * c;
}

// Partially applying the 'a' argument
const partiallyAppliedMultiply = multiply.bind(null, 2); // 'a' is fixed to 2

// Using the partially applied function
console.log(partiallyAppliedMultiply(3, 4)); // Output: 2 * 3 * 4 = 24
```

## Compose

combine two or more functions to create a new function. In function composition, the output of one function becomes the input of another function, allowing you to chain multiple functions together to perform a series of transformations on data.

```javascript
// Function to add 1 to a number
function addOne(x) {
  return x + 1;
}

// Function to double a number
function double(x) {
  return x * 2;
}

// Function composition
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

// Compose addOne and double functions
const addOneAndDouble = compose(double, addOne);

console.log(addOneAndDouble(3)); // Output: (3 + 1) * 2 = 8
```

## Pipe

While function composition chains functions together from right to left, function piping chains functions from left to right. In other words, the output of one function becomes the input of the next function.

```javascript
// Function to add 1 to a number
function addOne(x) {
  return x + 1;
}

// Function to double a number
function double(x) {
  return x * 2;
}

// Function piping
function pipe(...functions) {
  return function (input) {
    return functions.reduce((acc, func) => func(acc), input);
  };
}

// Pipe addOne and double functions
const pipeAddOneAndDouble = pipe(addOne, double);

console.log(pipeAddOneAndDouble(3)); // Output: (3 + 1) * 2 = 8
```

## IIFE

IIFE (Immediately Invoked Function Expression)

```javascript
function outerFunction() {
  var outerVar = "Outer variable";

  (function () {
    console.log(outerVar); // Access outerVar from the enclosing scope
  })();
}

outerFunction(); // Output: 'Outer variable'
```

## callback

JavaScript callback functions are functions that are passed as an argument to another function, and are executed after the parent function has completed. They are often used to handle asynchronous operations, allowing the calling code to handle the result of the asynchronous operation in a specific way.

```javascript
function fetchData(callback) {
  // simulate a network request
  setTimeout(function () {
    callback("Hello, World!");
  }, 1000);
}

fetchData(function (data) {
  console.log(data); // 'Hello, World!'
});
```

_How to compare two objects in JavaScript?_
Comparing two objects to determine if they are equal can be a bit tricky because objects are compared by reference, not by value.

- Using the JSON.stringify() method
- iterating over the properties of one object

#### How do you implement inheritance in JavaScript?(prototype)

In JavaScript, inheritance can be implemented using the prototype chain. Every object in JavaScript has a prototype property, which is a reference to another object. When a property or method is accessed on an object and is not found on that object, JavaScript will look for it on the object's prototype. This allows for a chain of prototypes to be established, with objects inheriting properties and methods from their prototypes.

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Creating instances
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Calling method inherited from prototype
person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob
```

## Timming events

The two key methods to use with JavaScript are:

- `setTimeout(_function, milliseconds_`)  
  Executes a function, after waiting a specified number of milliseconds.

- `setInterval(_function, milliseconds_`)  
  Same as setTimeout(), but repeats the execution of the function continuously.
- **`process.nextTick`**: Executes in the current phase of the event loop, right after the current operation completes and before I/O events.
- first process.nextTick() will execute first then setImmediate , setTimeout

```javascript
process.nextTick(() => {
  console.log("Inside process.nextTick callback");
});
```

- Count down timer

```javascript
useEffect(() => {
  const timerId = setInterval(() => {
    setTimeRemaining(calculateTimeRemaining());
  }, 1000);

  return () => clearInterval(timerId);
}, []);
```

## Arrow vs normal function

- rule 1: don't use the arrow function as method in the object , it will refer the global scope
- rule 2: don't use the this keyword inside a function , it will be undefined . its not a bug , its a feature
- rule 3: arrow function inherits this keyword from the parent scope

```javascript
const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // error
    // const isMillenial = function () {
    //   console.log(this); // undefined
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
```

## Scope chaining

refer the keep note

## Higher-order functions

Higher-order functions are functions that operate on other functions by either taking them as arguments or returning them as results.

```javascript
// Higher-order function that takes a function as an argument
function operateOnArray(array, operation) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

// Function to be passed as an argument
function square(num) {
  return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = operateOnArray(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

## Authentication

Auth0

- URL: https://www.youtube.com/watch?v=MqczHS3Z2bc

# Typescript

```javascript
let hobbies: string[];
hobbies =['sports','cooking']

// Note :if don't declare anything , it will infer any

// ObjectType
let person: {
name: string
age: number
}

person = {
name: 'Max',
age: 32
}

// Union both types

let course: string | number ="CSE"
course = 123

// Alias

type Person = {
name: string
age: number
}
// Generic: both argue should of same type of generic , so that it infers return type
function insertAt<T>(array:T[],value:T){
const newArray=[value , ...array]
return newArray
}

const updatearr= insertAt([1,2,3],4)
```

### Write a class which uses private variable and function

- Private members of the class are only accessible within the class and instances of the class do not have access to it
- Private members can be created with the prefix '#' before the name of the class member

```javascript
class ClassWithPrivateFields {
  #privateVar;
  publicVar;

  #privatFunc() {
    this.#privateVar = 7;
    this.publicVar = 10;
  }

  publicFunc() {
    this.#privatFunc();
    return [this.#privateVar, this.publicVar];
  }
}

// driver code
const instance = new ClassWithPrivateFields();

// can't access private variable
instance.privateVar; // undefined

// can't access private function
instance.privatFunc(); // Error
instance.publicFunc(); // 7, 10
```

### Show how inheritance works in Class and the use of super keyword with working example

- Class level inheritance can happen when a class inherits from another class using the keyword `extends`
- The child class can access parent class members using the keyword `super`
- The non private members of parent class become available to child class when inherited

```javascript
class BaseComponent {
  constructor(componentName) {
    this.componentName = componentName;
  }

  setState(obj) {
    this.state = obj;
    this.render();
  }

  addValues(props) {
    return props.reduce((a, b) => a + b);
  }
}

class Component extends BaseComponent {
  constructor(name = "", props) {
    super(name); // super() is used to call parent class consturctor
    this.state = { ...props };
  }

  addValues(...props) {
    const sum = super.addValues(props); // super.property is used to access parent class property
    this.setState({ sum, props });
  }

  render() {
    console.log(`Sum of ${this.state.props} is ${this.state.sum}`);
  }
}

// driver code
let component = new Component("UI Component");
component.componentName; // UI Component
component.addValues(3, 5); // Sum of 3,5 is 8
component.addValues(9, -4, 6, 2); // Sum of 9,-4,6,2 is 13
```

## Code Snippets

- implicit conversion

```javascript
var a = 5; // a is assigned an integer value
var b = "10"; // b is assigned a string value

var result = a + b; // Implicit type coercion

console.log(result); // Output: "510"
```

- An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

```javascript
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

- Variables with the `const` and `let` keyword are _block-scoped_.

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21)); // error
```

- answer is 11

```javascript
console.log(1 + "1" - 1);

// Step 1 : 1 + '1': In JavaScript, when you use the + operator with a number and a string, the number is implicitly converted to a string, and the two strings are then concatenated. So, 1 + '1' results in the string '11'.

//Step 2 :'11' - 1: When the - operator is used with a string and a number, JavaScript tries to convert the string to a number before performing the subtraction. In this case, the string '11' is converted to the number 11, and then the subtraction 11 - 1 is performed.
```

### Find the number of occurences of minimum value in the numbers list

```javascript
const min = Math.min(...arr);
minArr = arr.filter((value) => value === min);
minArr.length; // count of minimum value occurences
```

### pattern

Implement a simple example using the Observer design pattern in JavaScript. Create a 'Subject' that notifies its observers when its state changes.

```javascript
// Subject class
class Subject {
  constructor() {
    this.observers = []; // Array to hold observers
    this.state = null; // Initial state
  }

  // Method to add observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to remove observer
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to notify observers
  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.state));
  }

  // Method to set state and notify observers
  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }
}

// Observer class
class Observer {
  constructor(name) {
    this.name = name;
  }

  // Method called by Subject when state changes
  update(newState) {
    console.log(`${this.name} received update: ${newState}`);
  }
}

// Creating a Subject instance
const subject = new Subject();

// Creating Observer instances
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

// Adding observers to the subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Setting new state on the subject
subject.setState("New state!");
```

# Singleton pattern

⁠Implement a Singleton pattern in JavaScript. Ensure that only one instance of a class is created and provide a method to access that instance.

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // If no instance exists, create a new one
      this.data = []; // Example property
      Singleton.instance = this; // Store the instance
    }
    return Singleton.instance; // Return the existing instance
  }

  // Method to access the singleton instance
  static getInstance() {
    return Singleton.instance || new Singleton();
  }

  // Example method
  addData(value) {
    this.data.push(value);
  }

  // Example method
  getData() {
    return this.data;
  }
}

// Creating a singleton instance
const singletonInstance1 = Singleton.getInstance();
singletonInstance1.addData("Data 1");

// Accessing the same instance
const singletonInstance2 = Singleton.getInstance();
singletonInstance2.addData("Data 2");

console.log(singletonInstance1 === singletonInstance2); // Output: true

console.log(singletonInstance1.getData()); // Output: ["Data 1", "Data 2"]
console.log(singletonInstance2.getData()); // Output: ["Data 1", "Data 2"]
```

## Debounce and Throttle

- debounce

```javascript
export default function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout); // Clear the previous timeout
    timeout = setTimeout(() => {
      func.apply(this, args); // Call the original function with the latest arguments
    }, wait);
  };
}
```

- throttle

```javascript
export default function throttle(func, wait) {
  let lastCalled = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCalled >= wait) {
      lastCalled = now;
      func.apply(this, args);
    }
  };
}
```

## Event loop

##### Task queue / Macrotask queue / Callback queue

The task queue, also known as the macrotask queue / callback queue / event queue, is a queue that holds tasks that need to be executed. These tasks are typically asynchronous operations, such as callbacks passed to web APIs (setTimeout(), setInterval(), HTTP requests, etc.), and user interface event handlers like clicks, scrolls, etc.

##### Microtasks queue

Microtasks are tasks that have a higher priority than macrotasks and are executed immediately after the currently executing script is completed and before the next macrotask is executed. Microtasks are usually used for more immediate, lightweight operations that should be executed as soon as possible after the current operation completes. There is a dedicated microtask queue for microtasks. Microtasks include promises callbacks (then(), catch(), and finally()), await statements, queueMicrotask(), and MutationObserver callbacks.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

// Console output:
// Start
// End
// Promise 1
// Timeout 1
// Timeout 2
```
