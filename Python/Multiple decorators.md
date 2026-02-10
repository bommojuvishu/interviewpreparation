## Multiple decorators — how they work

### Example

```python
def dec_a(func):
    def wa(*args, **kw):
        print("A before")
        r = func(*args, **kw)
        print("A after")
        return r
    return wa

def dec_b(func):
    def wb(*args, **kw):
        print("B before")
        r = func(*args, **kw)
        print("B after")
        return r
    return wb

@dec_a
@dec_b
def hello():
    print("Hello")
```

---

## The key rule

**Applied bottom-up, executed top-down**

This:

```python
@dec_a
@dec_b
def hello(): ...
```

Means:

```python
hello = dec_a(dec_b(hello))
```

---

## Execution order

Calling `hello()` prints:

```
A before
B before
Hello
B after
A after
```

Outer decorator runs first, inner runs next, then function, then unwinds.

---

## With decorator arguments

```python
@retry(3)
@log
def fetch(): ...
```

Becomes:

```python
fetch = retry(3)(log(fetch))
```

Order still matters.

---

## Why `@functools.wraps` matters

Always use it:

```python
@functools.wraps(func)
```

It preserves:

- function name
- docstring
- annotations
- stack traces
- framework behavior (Flask/FastAPI)

---

## Practical rule of thumb

- **Outer decorators** → policy (auth, exceptions)
- **Inner decorators** → behavior (cache, retry, timing)

Wrong order = subtle production bugs.

---

## One-line interview answer

> Multiple decorators nest function calls: applied bottom-up, executed top-down, with each decorator wrapping the result of the one below it.

If you want, I can compress this further into a **30-second interview explanation**.

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
