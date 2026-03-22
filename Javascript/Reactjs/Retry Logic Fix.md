# Retry Logic Fix

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 3/19/2026 17:02:59  
**Updated:** 3/19/2026 17:11:35  
**Exported:** 3/19/2026 17:12:33  
**Link:** [https://chatgpt.com/c/69bbdeea-0494-8322-be81-bda530c9678e](https://chatgpt.com/c/69bbdeea-0494-8322-be81-bda530c9678e)  

## Response:
Here’s a clean, repo-ready version you can directly paste into your documentation.

* * *

Retry Utility for Unstable Async Functions
==========================================

Problem Statement
-----------------

You are given an unstable asynchronous function that may fail a few times before eventually succeeding.

Implement a utility function:

```
retry(fn, retries, delay)
```

### Requirements

*   Call the provided async function `fn`
*   If it fails:
    *   Wait for `delay` milliseconds
    *   Retry the function
*   Retry up to `retries` times
*   Log `Retrying... (n)` on each retry attempt
    *   `n` starts from 1
*   If all retries fail:
    *   Reject with the last error
*   If any attempt succeeds:
    *   Resolve immediately with the result

* * *

Helper Function (Given)
-----------------------

```
// Fake async function that fails first N times, then succeeds
function createUnstableFunction(failCount = 2) {
  let attempts = 0;

  return function unstable() {
    return new Promise((resolve, reject) => {
      attempts++;
      setTimeout(() => {
        if (attempts <= failCount) {
          reject(`Attempt ${attempts} failed`);
        } else {
          resolve(`Attempt ${attempts} succeeded`);
        }
      }, 300);
    });
  };
}
```

* * *

Example Usage
-------------

```
const unstableFetch = createUnstableFunction(2); // succeeds on 3rd attempt

retry(unstableFetch, 5, 1000)
  .then((res) => console.log('Done:', res))
  .catch((err) => console.error('All retries failed:', err));
```

### Expected Output

```
Retrying... (1)
Retrying... (2)
Done: Attempt 3 succeeded
```

* * *

Solution (Promise-based)
------------------------

```
function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    let attempt = 0;

    const execute = () => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (attempt < retries) {
            attempt++;
            console.log(`Retrying... (${attempt})`);

            setTimeout(execute, delay);
          } else {
            reject(err);
          }
        });
    };

    execute(); // initial attempt
  });
}
```

* * *

Solution (Async/Await - Recommended)
------------------------------------

```
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function retry(fn, retries, delay) {
  let attempt = 0;

  while (true) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= retries) {
        throw err;
      }

      attempt++;
      console.log(`Retrying... (${attempt})`);

      await wait(delay);
    }
  }
}
```

* * *

Key Notes
---------

*   The **initial call is not a retry**
*   `retries` refers to **extra attempts after the first failure**
*   Logging happens **before each retry**
*   Stops immediately once a success occurs
*   Final error is preserved and returned if all retries fail

* * *

Possible Enhancements (Production Use)
--------------------------------------

*   Exponential backoff (`delay * 2^n`)
*   Random jitter to avoid synchronized retries
*   Retry only on specific error types
*   Timeout / cancellation support

* * *

If you want, I can help you turn this into a reusable npm-style utility with TypeScript types and test cases.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)