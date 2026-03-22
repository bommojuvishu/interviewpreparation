# Star Rating Widget

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 3/16/2026 9:00:36  
**Updated:** 3/16/2026 9:03:41  
**Exported:** 3/16/2026 9:04:27  
**Link:** [https://chatgpt.com/c/69b7795b-4688-8320-ba61-8513f0a20e2e](https://chatgpt.com/c/69b7795b-4688-8320-ba61-8513f0a20e2e)  

## Prompt:
Create a star rating widget that allows users to select a rating value.

Requirements
The widget accepts two parameters: the maximum number of stars and the number of currently filled stars.
When a star is clicked, it is filled along with all the stars to its left.
Hovering over a star fills that star and all stars to its left.
The stars which need to be filled during hover take priority over existing filled state.
If the cursor leaves the widget and no new selection is made, the appropriate stars revert to the filled state before the hovering.
Make the star rating widget reusable such that multiple instances can be rendered within the same page.
The star icons, both empty and filled, are provided to you as SVGs.

A StarRating.js skeleton component has been created for you. You are free to decide the props of <StarRating />.

## Response:
You’re essentially building a **controlled interactive component** with three states to think about:

1.  **Committed state** → the rating already selected (clicked).
2.  **Temporary hover state** → preview while hovering.
3.  **Derived render state** → what should actually be filled.

A common mistake is trying to store everything in one state. Instead, keep **two states** and compute the UI.

* * *

Reusable Star Rating Widget (React)
===================================

### Key ideas

*   `rating` → committed value after click
*   `hoverRating` → temporary value during hover
*   **renderRating = hoverRating ?? rating**

This cleanly satisfies the requirements.

* * *

StarRating.js
-------------

```
import { useState } from "react";

export default function StarRating({ maxStars = 5, initialRating = 0, onChange }) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(null);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  const displayRating = hoverRating ?? rating;

  return (
    <div
      style={{ display: "flex", gap: "6px", cursor: "pointer" }}
      onMouseLeave={() => setHoverRating(null)}
    >
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const filled = starValue <= displayRating;

        return (
          <span
            key={starValue}
            onMouseEnter={() => setHoverRating(starValue)}
            onClick={() => handleClick(starValue)}
          >
            {filled ? <FilledStar /> : <EmptyStar />}
          </span>
        );
      })}
    </div>
  );
}
```

* * *

SVG Icons
---------

```
function FilledStar() {
  return (
    <svg width="24" height="24" fill="gold" viewBox="0 0 24 24">
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.847L19.335 24 12 20.017 4.665 24 6 15.595 0 9.748l8.332-1.593z"/>
    </svg>
  );
}

function EmptyStar() {
  return (
    <svg width="24" height="24" fill="none" stroke="gold" viewBox="0 0 24 24">
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.847L19.335 24 12 20.017 4.665 24 6 15.595 0 9.748l8.332-1.593z"/>
    </svg>
  );
}
```

* * *

Usage (multiple instances)
--------------------------

Because the component manages its own state, you can render many of them.

```
export default function App() {
  return (
    <div>
      <h3>Product A</h3>
      <StarRating maxStars={5} initialRating={3} />

      <h3>Product B</h3>
      <StarRating maxStars={10} initialRating={6} />
    </div>
  );
}
```

* * *

Why this approach works well
============================

### Hover priority

```
displayRating = hoverRating ?? rating
```

If hovering → use hover  
Otherwise → use clicked rating

Exactly matches the requirement.

* * *

### Multiple widgets

Each component has **isolated state**, so rendering multiple instances is trivial.

* * *

### Reusable API

Props allow flexibility:

```
maxStars
initialRating
onChange
```

This lets it behave like a **controlled component if needed**.

* * *

Subtle interview trick
======================

Interviewers often expect **event delegation** instead of attaching handlers to every star. For small numbers it's fine, but for performance you could attach one handler to the container.

But for clarity in interviews, **the above version is usually preferred.**

* * *

If you'd like, I can also show a **much more interview-optimized version (≈20 lines)** that senior frontend engineers often write in coding rounds.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)