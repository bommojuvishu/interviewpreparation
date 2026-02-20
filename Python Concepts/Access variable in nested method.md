# Access variable in nested method

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 8/31/2025 19:23  
**Updated:** 8/31/2025 19:24  
**Exported:** 8/31/2025 19:25  
**Link:** [https://chatgpt.com/c/68b453a7-5e48-8332-995a-f8899af0f169](https://chatgpt.com/c/68b453a7-5e48-8332-995a-f8899af0f169)  

## Prompt:
python access variable inside a nested method in the class

## Response:
In Python, you can access a variable inside a nested method in a class, but the **way you access it depends on where the variable is defined**:

* * *

### 1\. **Accessing Instance Variables (`self.variable`)**

If the variable belongs to the instance, you must use `self`:

```python
class MyClass:
    def __init__(self):
        self.value = 42   # instance variable

    def outer_method(self):
        def inner_method():
            # Access instance variable using self
            print(self.value)

        inner_method()

obj = MyClass()
obj.outer_method()
```

✅ Output:

```
42
```

* * *

### 2\. **Accessing Local Variables in Outer Method**

If the variable is **local to the outer method**, you need to declare it as `nonlocal` inside the nested function:

```python
class MyClass:
    def outer_method(self):
        x = 10

        def inner_method():
            nonlocal x
            x += 5
            print(x)

        inner_method()
        print("Outer x:", x)

obj = MyClass()
obj.outer_method()
```

✅ Output:

```
15
Outer x: 15
```

* * *

### 3\. **Accessing Class Variables (`cls.variable`)**

If the variable belongs to the **class**, you should use `cls` in a `@classmethod`:

```python
class MyClass:
    count = 0   # class variable

    @classmethod
    def outer_method(cls):
        def inner_method():
            print(cls.count)
        inner_method()

MyClass.outer_method()
```

✅ Output:

```
0
```

* * *

👉 Summary:

*   Use `self.var` → for instance variables.
*   Use `nonlocal` → for enclosing function’s local variables.
*   Use `cls.var` → for class variables.

* * *

Do you want me to show you how to **modify** the variable inside the nested method (not just access it)?

## Prompt:
yes

## Response:
Perfect 👍 Let’s go step by step — modifying depends on _where_ the variable is defined.

* * *

✅ 1. Modify **instance variable**
---------------------------------

Use `self` (since it belongs to the object):

```python
class MyClass:
    def __init__(self):
        self.value = 10   # instance variable

    def outer_method(self):
        def inner_method():
            self.value += 5   # modify instance variable
            print("Inside inner:", self.value)

        inner_method()
        print("Outside inner:", self.value)

obj = MyClass()
obj.outer_method()
```

👉 Output:

```
Inside inner: 15
Outside inner: 15
```

* * *

✅ 2. Modify **outer method’s local variable**
---------------------------------------------

Use `nonlocal` (to tell Python you mean the outer scope variable, not a new one):

```python
class MyClass:
    def outer_method(self):
        x = 10

        def inner_method():
            nonlocal x
            x += 5   # modifies outer x
            print("Inside inner:", x)

        inner_method()
        print("Outside inner:", x)

obj = MyClass()
obj.outer_method()
```

👉 Output:

```
Inside inner: 15
Outside inner: 15
```

Without `nonlocal`, it would throw an **UnboundLocalError** because Python thinks `x` inside is a new local variable.

* * *

✅ 3. Modify **class variable**
------------------------------

Use `cls` in a `@classmethod`:

```python
class MyClass:
    count = 0   # class variable

    @classmethod
    def outer_method(cls):
        def inner_method():
            cls.count += 1   # modifies class variable
            print("Inside inner:", cls.count)

        inner_method()
        print("Outside inner:", cls.count)

MyClass.outer_method()
MyClass.outer_method()
```

👉 Output:

```
Inside inner: 1
Outside inner: 1
Inside inner: 2
Outside inner: 2
```

* * *

🔑 **Rule of thumb**:

*   `self` → instance variable
*   `nonlocal` → outer function’s local variable
*   `cls` → class variable

* * *

Do you want me to also cover **modifying a global variable** from inside a nested method?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)