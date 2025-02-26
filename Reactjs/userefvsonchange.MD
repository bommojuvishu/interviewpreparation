In React, both `onChange` and `ref` can be used to handle input elements, but they serve different purposes and are used in different scenarios.

### 1. `onChange` (Controlled Component)

-   The `onChange` handler updates the component's state whenever the input value changes.
-   The value of the input is controlled by React state.
-   Best for handling user input dynamically and updating the UI accordingly.
```javascript
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}

```
### 2. `ref` (Uncontrolled Component)

-   Uses `useRef` to get the input's DOM element directly.
-   The input value is not controlled by React state.
-   Best for cases where you need to access the value without re-rendering (e.g., focus management, reading values on form submission).

```js
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

```
