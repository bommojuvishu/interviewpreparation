# React Enter Key Submit

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 3/16/2026 8:46:03  
**Updated:** 3/16/2026 8:46:15  
**Exported:** 3/16/2026 8:47:37  
**Link:** [https://chatgpt.com/c/69b775f2-f2ac-8323-b932-2dd4ed9b6eff](https://chatgpt.com/c/69b775f2-f2ac-8323-b932-2dd4ed9b6eff)  

## Prompt:
eactjs input box enter key submit

## Response:
In **React**, the usual pattern is to listen for the **Enter key** in the input and trigger your submit logic.

### 1\. Simple approach (recommended)

Handle the `onKeyDown` event and check if the key is `"Enter"`.

```
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitted:", value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Type and press Enter"
    />
  );
}
```

### 2\. Better pattern for forms

If this input is part of a form, **let the form handle Enter automatically**.

```
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Press Enter" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Pressing **Enter inside the input automatically triggers `onSubmit`**.

### Practical advice (based on real projects)

Since you mentioned working with **React apps and modals/grids before**, the **form approach is usually cleaner** because:

*   Handles **Enter automatically**
*   Works with **accessibility**
*   Avoids manual key checks everywhere

### Common mistake to avoid

Do **not** use `onKeyPress` anymore. It is deprecated in modern React.

Use:

*   `onKeyDown` ✔️
*   `onKeyUp` ✔️

* * *

If you want, I can also show a **clean reusable hook (`useEnterSubmit`)** that many senior React engineers use to avoid repeating this logic. It’s useful in large apps.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)