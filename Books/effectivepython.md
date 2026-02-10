## Chapter 1

Whitespace

- Use spaces instead of tabs for indentation.
- Use four spaces for each level of syntactically significant indenting.
- Lines should be 79 characters in length or less.
- Continuations of long expressions onto additional lines should be indented by four extra spaces from their normal indentation level.
- In a file, functions and classes should be separated by two blank lines.
- In a class, methods should be separated by one blank line.
- In a dictionary, put no whitespace between each key and colon, and put a single space before the corresponding value if it fits on the same line.
- Put one—and only one—space before and after the = operator in a variable assignment.
- For type annotations, ensure that there is no separation between the variable name and the colon, and use a space before the type information.

## Chapter 3 Functions

- “Functions that return None to indicate special meaning are error prone because None and many other values, such as zero and empty strings, evaluate to False in Boolean expressions.”
- “Raise exceptions to indicate special situations instead of returning None. Expect the calling code to handle exceptions properly when they’re documented.”

### Python closures

Closure functions can refer to variables from any of the enclosing scopes in which they were defined.
By default, closures can’t affect enclosing scopes by assigning variables.
Use the nonlocal statement to indicate when a closure can modify a variable in its enclosing scopes. Use the global statement to do the same thing for module-level names.

```py
def sort_priority3(numbers, group):
    found = False

    def helper(x):
        nonlocal found  # Added
        if x in group:
            found = True
            return (0, x)
        return (1, x)

    numbers.sort(key=helper)
    return found”

```

### “Item 34: Reduce Visual Noise with Variable Positional Arguments”

Functions can accept a variable number of positional arguments by using \*args in the def statement.

```
def log(sequence, message, *values):
    if not values:
        print(f'{sequence} - {message}')
    else:
        values_str = ', '.join(str(x) for x in values)
        print(f'{sequence} - {message}: {values_str}')
log(1, 'Favorites', 7, 33)      # New with *args OK
log(1, 'Hi there')              # New message only OK
log('Favorite numbers', 7, 33)  # Old usage breaks
```

- A default argument value is evaluated only once: during function definition at module load time. This can cause odd behaviors for dynamic values (like {}, [], or datetime.now()).
- Use None as the default value for any keyword argument that has a dynamic value. Document the actual default behavior in the func- tion’s docstring.

### Item 11: Know How to Slice Sequences

- The result of slicing a list is a whole new list. References to the objects from the original list are maintained.

```python
assert a[:5] == a[0:5]
assert a[5:] == a[5:len(a)]
```

### Item 12: Avoid Striding and Slicing in a Single Expression

- If you assign to a slice with no start or end indexes, you replace the entire contents of the list with a copy of what’s referenced (instead of allocating a new list)

```python
# reverse string
z = x[::-1]

x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
x[::2]   # ['a', 'c', 'e', 'g']
x[::-2]  # ['h', 'f', 'd', 'b']

```

## Generators

without using the generator

```py
def index_words(text):
    result = []
    if text:
        result.append(0)
    for index, letter in enumerate(text):
        if letter == ' ':
            result.append(index + 1)
    return result
```

This works as expected for some sample input:

```py
address = 'Four score and seven years ago...'
result = index_words(address)
print(result[:10])
>>>
[0, 5, 11, 15, 21, 27, 31, 35, 43, 51]
```

BUT the problem is using the above approach , you have to store the data , if its big input , memory may overflow

Generator take different , they send the result immediately and continue processing

- No extra space for the result array

```py
def index_words_iter(text):
    if text:
        yield 0
    for index, letter in enumerate(text):
        if letter == ' ':
            yield index + 1

result = list(index_words_iter(address))
print(result[:10])
>>>
[0, 5, 11, 15, 21, 27, 31, 35, 43, 51]
```
