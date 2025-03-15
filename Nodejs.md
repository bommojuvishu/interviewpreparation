# Nodejs

- a high-performance, event-driven, and non-blocking I/O (input/output) model.
- Node.js uses the V8 JavaScript engine, which is written in C++. V8 is an open-source JavaScript engine developed by Google and is highly optimized for performance. It compiles JavaScript code into machine code for execution. Since V8 is a C++ library, Node.js has to interface with it using C++ bindings.

### HTTP status codes

1.  [Informational responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses) (`100` – `199`)
2.  [Successful responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses) (`200` – `299`)
3.  [Redirection messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages) (`300` – `399`)
4.  [Client error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses) (`400` – `499`)
5.  [Server error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) (`500` – `599`)

### dotenv

- The `process.env` object in Node.js provides access to the user environment, including environment variables.
- the `dotenv` package is commonly used for loading environment variables from a `.env` file into the `process.env` object.
- npm install dotenv

### Module.exports vs **exports**

- When we want to export a single class/variable/function from one module to another module, we use the _module.exports_ way.
- When we want to export multiple variables/functions from one module to another, we use _exports_ way

### EventEmitter

The EventEmitter is a class that facilitates communication/interaction between objects in Node.js. The EventEmitter class can be used to create and handle custom events.

EventEmitter is at the core of Node asynchronous event-driven architecture. Many of Node's built-in modules inherit from EventEmitter including prominent frameworks like Express.js. An emitter object basically has two main features:

- Emitting name events.
- Registering and unregistering listener functions.

```js
/**
 * Callback Events with Parameters
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

function listener(code, msg) {
   console.log(`status ${code} and ${msg}`);
}

eventEmitter.on('status', listener); // Register listener
eventEmitter.emit('status', 200, 'ok');

// Output
status 200 and ok
```

**Building Blocks:**

- **.emit()** - this method in event emitter is to emit an event in module
- **.on()** - this method is to listen to data on a registered event in node.js
- **.once()** - it listen to data on a registered event only once.
- **.addListener()** - it checks if the listener is registered for an event.
- **.removeListener()** - it removes the listener for an event.

## What is an error-first callback?

```js
fs.readFile("file.json", function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
```

Any asynchronous method expects one of the arguments to be a callback. The full callback argument list depends on the caller method, but the first argument is always an error object or null. When we go for the asynchronous method, an exception thrown during function execution cannot be detected in a try/catch statement. The event happens after the JavaScript engine leaves the try block.

## What is callback hell in Node.js?

every callback takes an argument that is a result of the previous callbacks.

```js
/**
 * Callback Hell
 */
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

## How Node.js read the content of a file?

```js
/**
 * read_file.js
 */
const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(3000);
```

## How many types of streams are present in node.js?

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. There are four types of streams

- **Readable** − Stream which is used for read operation.
- **Writable** − Stream which is used for write operation.
- **Duplex** − Stream which can be used for both read and write operation.
- **Transform** − A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times.

**Methods:**

- **data** − This event is fired when there is data is available to read.
- **end** − This event is fired when there is no more data to read.
- **error** − This event is fired when there is any error receiving or writing data.
- **finish** − This event is fired when all the data has been flushed to underlying system.

```js
const fs = require("fs");
const data = "File writing to a stream example";

// Create a writable stream
const writerStream = fs.createWriteStream("file.txt");

// Write the data to stream with encoding to be utf8
writerStream.write(data, "UTF8");

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on("finish", function () {
  console.log("Write completed.");
});

writerStream.on("error", function (err) {
  console.log(err.stack);
});
```

## NPM Packages

**body-parser:**(it is already integrated to Express js )

`body-parser` extract the entire body portion of an incoming request stream and exposes it on `req.body`.

**dotenv**: used to load the config file as the env variables . "process.env" will access those variables

**bcrypt** : used to hash the password. -> store in the DB as hash string

### **Blocking vs Non-blocking:**

```js
// Blocking
const fs = require("fs");
const data = fs.readFileSync("/file.md"); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

// Non-blocking
const fs = require("fs");
fs.readFile("/file.md", (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
```

**cors:**

**C**ross-**O**rigin **R**esource **S**haring (CORS) headers allow apps running in the browser to make requests to servers on different domains (also known as origins). CORS headers are set on the server side - the HTTP server is responsible for indicating that a given HTTP request can be cross-origin.

```js
/**
 * Enable CORS for a Single Route
 */
const express = require("express");
const cors = require("cors");
const app = express();

app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 80");
});
```

### middleware for log

```javascript
const express = require("express");
const app = express();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
```

### Router

A router is a module that helps you manage and structure the routes of your application, providing a way to organize code related to specific paths or endpoints.

```javascript
// userRouter.js
const express = require("express");
const router = express.Router();

// Define routes for /users
router.get("/", (req, res) => {
  res.send("Get all users");
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Get user with ID ${userId}`);
});

module.exports = router;
```

app.js

```javascript
// app.js
const express = require("express");
const app = express();

// Import the user router
const userRouter = require("./userRouter");

// Use the user router for /users routes
app.use("/users", userRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
