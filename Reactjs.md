## ReactJS

_What is the difference between a controlled and uncontrolled component in React.js?_
a controlled component refers to a component whose state is controlled by the parent component through props and callbacks, while an uncontrolled component refers to a component that manages its own state internally.

### lifecycle of reactjs

1. componentWillMount: Invoked just before a component is mounted to the DOM.
2. render: Invoked to render the component's view.
3. componentDidMount: Invoked just after a component is mounted to the DOM.
4. componentWillReceiveProps()
5. shouldComponentUpdate: Invoked before render to determine if a re-render is needed.
6. componentWillUpdate: Invoked just before a re-render.
7. componentDidUpdate: Invoked just after a re-render.
8. componentWillUnmount: Invoked just before a component is unmounted from the DOM.

_REACT Hooks_

1. useState
2. useEffect
3. usecontext
4. useRef
5. useReducer
6. usecallback
7. useMemo

### In useEffect, what's the difference between providing no dependency array and an empty one?

Giving it an empty array acts like componentDidMount as in, it only runs once.

Giving it no second argument acts as both componentDidMount and componentDidUpdate, as in it runs first on mount and then on every re-render.

Giving it an array as second argument with any value inside, eg , [variable1] will only execute the code inside your useEffect hook ONCE on mount, as well as whenever that particular variable (variable1) changes.

### UseEffect

The `componentWillUnmount()` method is called immediately before a component is unmounted and destroyed. It is a good place to do some cleanup works.

```
// With ccomponentDidUnmount()
componentWillUnmount() {
    console.log('Hello World');
}

// with useEffect()
useEffect(() => {
    console.log('Hello World');
    return () => {
        console.log('Do some cleanup');
    }
}, [])
```

### useMemo

Clicking "Increment Count" does not trigger recalculation.
Clicking "Increment Num" triggers recalculation.

```javascript
import { useMemo, useState } from "react";

const ExpensiveCalculation = ({ num }) => {
  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]); // Only recalculates when num changes

  return <p>Square: {squaredNumber}</p>;
};

export default function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  return (
    <div>
      <button
        onClick={() => {
          console.log("Count increment");
          setCount(count + 1);
        }}
      >
        Increment Count: {count}
      </button>
      <button onClick={() => setNum(num + 1)}>Increment Num: {num}</button>
      <ExpensiveCalculation num={num} />
    </div>
  );
}
```

### useCallback

useCallback is a React Hook used to memoize functions to prevent unnecessary re-creations on every render.
from example

- Clicking "Increment Count" does not re-render MemoizedChild (since handleClick remains the same).
- Clicking "Click Me" logs "Button clicked".

```js
import React, { useState, useCallback, memo } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
};

const MemoizedChild = React.memo(ChildComponent);

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // No dependencies → function remains the same

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <MemoizedChild onClick={handleClick} />
    </div>
  );
}
```

### String Interpolation

dynamically generate class names, style attributes, or other string-based properties based on the state or props of a component. In such cases, string interpolation comes in handy.
custom hooks can be used

```javascript
const [value, setValue] = useState("light");
<div className={`${value}`}>...</div>;
```

## useRef

The useRef hook can hold a mutable value that persists across renders without causing re-renders. By updating the ref inside a useEffect, you can store the previous value of a state variable after every render.

```javascript
import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  // Update the ref to store the previous count after every render
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Get Input Value Without Re-Rendering
✅ Pros:

- Avoids re-renders when the input value changes.
- Directly accesses the DOM element (inputRef.current).
- Useful for focusing, clearing, or modifying inputs programmatically.
  ❌ Cons:

Cannot trigger a re-render if the value is updated.

```js
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("Input Value:", inputRef.current.value); // Get input value without causing re-renders
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleClick}>Get Input Value</button>
    </div>
  );
}
```

## useReducer

useReducer is a React Hook for managing complex state logic within functional components. It offers an alternative to useState, particularly when dealing with state that involves multiple sub-values or intricate update logic. useReducer is inspired by the reducer pattern found in Redux, centralizing state management and making it more predictable.

```js
import { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "ADD_TODO", payload: "New Task" })}
      >
        Add Task
      </button>
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        >
          {todo.text} {todo.completed ? "✅" : "❌"}
        </div>
      ))}
    </div>
  );
}
```

## Suspense

### **What is `Suspense` in React?**

`React.Suspense` is a built-in component that allows you to **delay rendering** a component until some asynchronous operation (like data fetching or lazy loading) is complete.

### **Why Use `Suspense`?**

- Improves **user experience** by showing a fallback (like a loading spinner) while waiting for data or components.
- Supports **lazy loading** components with `React.lazy()`.
- Works with **React Server Components (RSC)** and **data fetching** in frameworks like Next.js.

1. Lazy Loading Components with `Suspense`

```js
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent")); // Lazy load

export default function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<h2>Loading Component...</h2>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

2. Suspense with Data Fetching (React 18 & Next.js)

```js
import { Suspense } from "react";

function FetchData() {
  const data = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => res.json()
  );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function App() {
  return (
    <Suspense fallback={<h2>Loading Data...</h2>}>
      <FetchData />
    </Suspense>
  );
}
```

## **When to Use `Suspense`?**

✅ **Use when:**

1.  **Lazy loading components** (`React.lazy()`).
2.  **Fetching data in React Server Components**.
3.  **Optimizing performance** by reducing initial bundle size.

❌ **Do NOT use when:**

- You need full control over loading states (use `useState` + `useEffect` instead).

### REACT JS context API

```javascript

// create store
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// consume store
import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

const UserProfile = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
```

- call the API using the fetch

```javascript
import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
      <p> {posts.value} </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );
}
```

### TODO

```javascript
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState(["test"]);
  const [current, setCurrent] = useState("");
  console.log(todo);
  const testfunc = (e) => {
    console.log("hello");
    setTodo([...todo, current]);
  };

  const delfun = (idx) => {
    const tmp = todo;
    console.log(tmp);
    tmp.pop(idx);
    setTodo([...tmp]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some happen!</h2>
      <input onChange={(e) => setCurrent(e.target.value)} />{" "}
      <button onClick={(e) => testfunc(e)}>Add</button>
      {todo.map((item, idx) => {
        console.log("idx", idx);
        return (
          <div>
            {item} <button onClick={() => delfun(idx)}>del</button>
          </div>
        );
      })}
    </div>
  );
}
```

conclusions

- if a state is array , then always set the value like setTodo([...todo,current])
- even a new value also setTodo([...value])
- event hanlders are onClick() , onChange()

### Redux

1. An action is dispatched: An action is an object that contains a type property and an optional payload. It is dispatched by calling the dispatch function provided by the Redux store.

2. The action is sent to the reducer: The reducer is a pure function that takes the current state and the action and returns a new state. It checks the type of the action and performs the appropriate update on the state.

3. The store updates its state: The store receives the new state returned by the reducer and updates its internal state. The store then notifies all subscribed components that the state has changed.

4. Subscribed components re-render: When the store notifies subscribed components of a state change, React re-renders those components with the new state.

```javascript
// action.js
export const increment = () => ({
  type: "INCREMENT",
});

// reducer.js
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// store.js
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;

// Component.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./action";

function Component() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleButtonClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}
```

### redux Thunk

Redux Thunk is a middleware for Redux, a popular state management library for JavaScript applications. It allows you to write action creators that return functions instead of plain action objects. This enables you to perform asynchronous operations, such as API calls, inside your action creators.

- As the reducers are pure state components , the async code has to placed in the action part

### React Forms

- onChange used to track the input field changes
- onSubmit will be called when the form is submitted and will receive an object containing the values of each form field.

reference : https://www.freecodecamp.org/news/how-to-build-forms-in-react/

```javascript
import { useState } from "react";

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

### mapStateToProps

it is used to connect a class based component to the redux store

- If you are using class components and `connect`, you will typically use `mapStateToProps`.
- If you are using functional components with hooks, especially in combination with the `useDispatch` hook, you may prefer `useSelector`

reference : [https://www.youtube.com/watch?v=d-OWkoBysDA](https://www.youtube.com/watch?v=d-OWkoBysDA)

```javascript
// Import necessary dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// Define a simple component
class MyComponent extends Component {
  render() {
    // Access the prop that was mapped from the Redux state
    const { myValueFromRedux } = this.props;

    return (
      <div>
        <p>Value from Redux: {myValueFromRedux}</p>
      </div>
    );
  }
}

// Define mapStateToProps function
const mapStateToProps = (state) => {
  return {
    myValueFromRedux: state.myReducer.myValue, // Replace with your actual reducer and state
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(MyComponent);
```

### Env Variables

React supports environment variables through the use of a file named `.env`

1.  **Create a .env file:**

    - In the root of your React project, create a file named `.env`.
    - You can create environment variables in this file by following the format: `REACT_APP_VARIABLE_NAME=value`. Note that all environment variables in React must start with `REACT_APP_` to be recognized.

```javascript
REACT_APP_API_KEY=your_api_key
REACT_APP_API_URL=https://api.example.com

//Access
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

```

It's important to prefix your variables with `REACT_APP_` to avoid conflicts with other build tools that may use environment variables.

### custom hook

- **Handling Side Effects**: Custom hooks are useful for encapsulating logic that involves side effects, such as interacting with the browser's APIs (e.g., local storage, geolocation) or making network requests.
- **Abstracting Component Logic**: If you find yourself repeating certain logic in multiple components, you can abstract that logic into a custom hook. For example, you might have logic for fetching data from an API, handling loading and error states, and updating state based on the response.

```javascript
// useCounter.js
import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
```

App.js

```javascript
// ExampleComponent.js
import React from "react";
import useCounter from "./useCounter";

const ExampleComponent = () => {
  // Using the custom hook to manage the state of a counter
  const { count, increment, decrement, reset } = useCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ExampleComponent;
```

# Authentication and authorisation

https://www.youtube.com/watch?v=X8eAbu1RWZ4

# Routing

sample routing

```javascript
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
```

- Navlink : The `NavLink` component is a variation of the `Link` component that provides additional styling capabilities for navigation elements based on the current route.
- Protected Route

```javascript
// App.js

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const isAuthenticated = false; // Replace with your authentication logic

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const Home = () => <h2>Home</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Login = () => <h2>Login</h2>;

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default App;
```

## React Project structure

- assets
- actions
- components
- containers
- config
- hooks
- redux
- reducers
- utils
- App.js
- Index.js
- .env

## Suspense

React's Suspense is a feature that lets you wait for some code to load or data to fetch before rendering a component. It's useful for handling asynchronous operations gracefully, especially when paired with concurrent features like data fetching.

```javascript
import React, { Suspense } from "react";

// A mock API function to simulate data fetching
const fetchData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ message: "Hello, Suspense!" }), 2000)
  );

// Create a resource to fetch the data
const createResource = (promise) => {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const resource = createResource(fetchData());

// A component that reads data from the resource
const DataDisplay = () => {
  const data = resource.read(); // This will suspend while data is loading
  return <div>{data.message}</div>;
};

// Main App Component
const App = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DataDisplay />
      </Suspense>
    </div>
  );
};

export default App;
```

## Lazy Loading

React's lazy loading is a way to load components only when they are needed, reducing the initial bundle size and improving performance. It is implemented using the React.lazy function along with React.Suspense.

```javascript
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy loaded components
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Router>
      <h1>React Lazy Loading with Routing</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
```
