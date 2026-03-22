### App.js

```js
// App.js

import React from "react";
import Modal from "./Modal";
export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "block",
        padding: 30,
        margin: "auto",
      }}
    >
      <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
      <h4>Modal Component in ReactJS?</h4>
      <button type="button" onClick={handleOpen}>
        Click Me to Open Modal
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <>
          <h1>GFG</h1>
          <h3>A computer science portal!</h3>
        </>
      </Modal>
    </div>
  );
}
```

### Modal.js

```js
// Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: 150,
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

### How click outside works

🔍 Step-by-Step Flow
Case 1: Click outside (overlay)

- Click happens on overlay
- onClick runs
- onClose() is called
- Modal closes

Case 2: Click inside modal

- Click happens inside modal
- modal onClick runs

```js
e.stopPropagation();
```

- Event does NOT bubble to overlay
- Overlay onClick never fires
- Modal stays open
