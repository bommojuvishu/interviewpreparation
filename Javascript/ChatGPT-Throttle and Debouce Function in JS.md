# Throttle Function in JS

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 5/13/2025 8:53  
**Updated:** 5/13/2025 9:06  
**Exported:** 5/13/2025 9:07  

## Response:
Great question, Vishwanath!

### 🚦 Throttle vs 🕰️ Debounce

Both are used to **control the rate** at which a function executes, especially when dealing with **frequent events** like scrolling, resizing, or typing.

* * *

⚡ Throttle — “Run at most once every X ms”
------------------------------------------

### ✅ Use When:

You want to **limit how often** a function runs regardless of how often it's triggered.

### 📍 Common Use Cases:

| Scenario | Why Use Throttle? |
| --- | --- |
| **Window `scroll` event** | Prevent too many function calls while scrolling |
| **Window `resize` event** | Limit layout calculations |
| **Mouse drag/move tracking** | Capture movement data without lag |
| **Button click spamming** | Prevent accidental multiple clicks |
| **Analytics/Tracking** | Send logs no more than once per X ms |

### 🔁 Example:

```js
window.addEventListener("scroll", throttle(() => {
  console.log("User is scrolling");
}, 200));
```

* * *

⏳ Debounce — “Run only after X ms of inactivity”
------------------------------------------------

### ✅ Use When:

You want to **delay execution** until the event has **stopped firing** for a certain time.

### 📍 Common Use Cases:

| Scenario | Why Use Debounce? |
| --- | --- |
| **Search input (auto-suggest)** | Don’t hit the API until user stops typing |
| **Form validation** | Wait until typing stops before validating |
| **Resize end detection** | Run logic only after resizing stops |
| **Auto-save drafts** | Save only after user stops typing |

### 🔁 Example:

```js
input.addEventListener("input", debounce((e) => {
  fetchSuggestions(e.target.value);
}, 300));
```

* * *

🔁 Comparison Table
-------------------

| Feature | Throttle | Debounce |
| --- | --- | --- |
| Executes **immediately** | ✅ (on first call) | ❌ (only after delay) |
| Ignores rapid calls | ✅ | ✅ |
| Ensures **last call is run** | ❌ by default (unless trailing is added) | ✅ |
| Use case | Limit frequency (scroll, resize) | Wait for inactivity (input typing) |

* * *

🔧 Want both?
-------------

Some libraries like **Lodash** allow you to configure both `leading` and `trailing` execution in throttle/debounce.

* * *

Would you like ready-made `debounce` code too?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)