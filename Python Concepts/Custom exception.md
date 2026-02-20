## Custom exception — concise explanation

**What it is**  
A custom exception represents a **domain-level failure**, not just a technical error.

---

## Why use it

Without custom exceptions:

- Errors are strings
- Handling is ad-hoc
- APIs are inconsistent

With custom exceptions:

- Structured error handling
- Stable error contracts
- Centralized response logic

---

## Minimal but correct example

```python
class VisionApiException(Exception):
    def __init__(self, message, code=None, details=None):
        super().__init__(message)
        self.code = code
        self.details = details
```

---

## Why `super().__init__(message)`

Ensures:

- `str(e)` works
- Stack traces are correct
- Logging behaves properly

---

## Usage

```python
raise VisionApiException(
    "Can't reach pricing service",
    code=40001,
    details={"service": "pricing"}
)
```

---

## Handling

```python
except VisionApiException as e:
    if e.code == 40001:
        retry()
```

---

## Best practices

- Use **exception hierarchy**, not one giant exception
- Use **error codes/constants**, not magic numbers
- Preserve cause with `raise ... from e`
- Never swallow root exceptions

---

## Interview one-liner

> Custom exceptions model domain-specific failures and enable structured, predictable error handling instead of string-based logic.

If you want it even shorter (2–3 bullets) or tailored for **interview vs production**, say the word.

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
