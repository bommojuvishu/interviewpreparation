# Python retry logic

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/10/2026 21:04:12  
**Updated:** 2/10/2026 21:04:46  
**Exported:** 2/12/2026 22:06:09  
**Link:** [https://chatgpt.com/c/698b4fce-d3c0-8321-92e0-29086dbd773b](https://chatgpt.com/c/698b4fce-d3c0-8321-92e0-29086dbd773b)  

## Prompt:
Python implement   retry 3 times url hit end point

## Response:
Let’s do this cleanly and _correctly_, not just “slap a loop around requests”.

Below are **three progressively better approaches**, depending on how serious you want to be.

* * *

1️⃣ Simple + explicit (good for interviews, scripts)
----------------------------------------------------

This is the **baseline** everyone should know.

```python
import requests
import time

def fetch_with_retry(url, retries=3, delay=1):
    for attempt in range(1, retries + 1):
        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Attempt {attempt} failed: {e}")
            if attempt == retries:
                raise
            time.sleep(delay)

# usage
data = fetch_with_retry("https://api.example.com/data")
```

### Why this is OK

*   Clear control flow
*   Explicit retry count
*   Handles **network + HTTP errors**

### Limitations

*   Fixed delay (no backoff)
*   No retry filtering (retries even on 400)

* * *

2️⃣ Production-grade (recommended) — `urllib3 Retry`
----------------------------------------------------

This is what you actually want in **real systems**.

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def get_session_with_retry():
    retry = Retry(
        total=3,
        backoff_factor=1,      # 1s, 2s, 4s
        status_forcelist=[500, 502, 503, 504],
        allowed_methods=["GET"]
    )

    adapter = HTTPAdapter(max_retries=retry)
    session = requests.Session()
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session

session = get_session_with_retry()
response = session.get("https://api.example.com/data", timeout=5)
response.raise_for_status()
data = response.json()
```

### Why this is **better**

*   Exponential backoff
*   Retries only on **safe conditions**
*   Battle-tested (used internally by `requests`)

### Strategic note

If this code runs in **microservices / backend APIs**, this is the **minimum bar**.

* * *

3️⃣ Async version (`aiohttp`) — if you care about scale
-------------------------------------------------------

Only use this if you’re already async.

```python
import aiohttp
import asyncio

async def fetch_with_retry(url, retries=3):
    for attempt in range(retries):
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url, timeout=5) as resp:
                    resp.raise_for_status()
                    return await resp.json()
        except Exception as e:
            if attempt == retries - 1:
                raise
            await asyncio.sleep(2 ** attempt)

asyncio.run(fetch_with_retry("https://api.example.com/data"))
```

* * *

Common mistake I’ll challenge you on ⚠️
---------------------------------------

> “Retry everything 3 times”

That’s **wrong**.

You should **NOT retry**:

*   400, 401, 403 (client bugs)
*   Validation errors
*   Auth failures

You **should retry**:

*   Network timeouts
*   5xx
*   Temporary DNS issues

That’s why approach #2 exists.

* * *

My recommendation (actionable)
------------------------------

*   **Interview / scripts** → Approach #1
*   **Backend / production** → Approach #2
*   **High-throughput async systems** → Approach #3

If you want, tell me:

*   sync or async?
*   GET only or POST too?
*   idempotency matters?

I’ll tune the retry policy exactly for your use case.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)