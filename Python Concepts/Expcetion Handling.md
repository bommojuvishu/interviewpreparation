# Exception Handling

Yes.

`Exception` is a **class** in Python.

More precisely:

```
BaseException
    ├── Exception
    │     ├── ValueError
    │     ├── TypeError
    │     ├── AttributeError
    │     ├── IndexError
    │     └── ...
    ├── SystemExit
    ├── KeyboardInterrupt
    └── GeneratorExit
```

So:

- `Exception` inherits from `BaseException`
- Most runtime errors inherit from `Exception`

---

### Proof in Python

```py
print(type(Exception))        # <class 'type'>
print(issubclass(ValueError, Exception))   # True
print(issubclass(Exception, BaseException))  # True
```

---

### What happens in `except Exception:`?

When you write:

```py
try:
    ...
except Exception as e:
    ...
```

Python checks:

> “Is the raised error an instance of Exception or its subclasses?”

If yes → it gets caught.

---

### Important nuance

`except Exception:`  
✔ catches almost all application errors  
❌ does NOT catch:

- `KeyboardInterrupt`
- `SystemExit`

Those inherit directly from `BaseException`.

---

### Bigger picture

Understanding this hierarchy matters because:

- Catching `BaseException` is usually wrong.
- Catching `Exception` is usually correct.
- Catching specific exceptions (like `AttributeError`) is best practice.

If you want to go one level deeper, we can discuss how custom exceptions work and why you should inherit from `Exception`, not `BaseException`.

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
