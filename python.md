- [Python](#Python)
- [Node js](#Nodejs)

# Python

````

_What is the difference between a tuple and a list in Python?_
The main difference between a tuple and a list in Python is that a tuple is immutable
_How would you read and write to a file in Python?_

```python
with open('example.txt', 'r') as file:
    # read entire file
    content = file.read()
    print(content)
    # read one line at a time
    for line in file:
        print(line)

````

## String methods

- find

```python
message = 'Python is a fun programming language'
# check the index of 'fun'
print(message.find('fun'))
# Output: 12
```

- index

```python
text = 'Python is fun'
# find the index of is
result = text.index('is')
print(result)
# Output: 7
```

- join

```python
text = ['Python', 'is', 'a', 'fun', 'programming', 'language']
# join elements of text with space
print(' '.join(text))
# Output: Python is a fun programming language
```

- replace

```python
text = 'bat ball'
# replace 'ba' with 'ro'
replaced_text = text.replace('ba', 'ro')
print(replaced_text)
# Output: rot roll
```

- find

```python
text = 'Python is fun'
# split the text from space
print(text.split())
# Output: ['Python', 'is', 'fun']
```

## Sets

```python

thisset = {"apple", "banana", "cherry", "apple"}
thisset = set(("apple", "banana", "cherry"))

thisset.add("orange")
```

# OOPS concepts

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

_What are decorators in Python?_
Decorators in Python are essentially functions that add functionality to an existing function in Python without changing the structure of the function itself. They are represented the @decorator_name in Python and are called in a bottom-up fashion. For example:

```python
# decorator function to convert to lowercase
def lowercase_decorator(function):
   def wrapper():
       func = function()
       string_lowercase = func.lower()
       return string_lowercase
   return wrapper
# decorator function to split words
def splitter_decorator(function):
   def wrapper():
       func = function()
       string_split = func.split()
       return string_split
   return wrapper
@splitter_decorator # this is executed next
@lowercase_decorator # this is executed first
def hello():
   return 'Hello World'
hello()   # output => [ 'hello' , 'world' ]
```

_What is pickling and unpickling?_
Pickling is the name of the serialization process in Python.
pickle.dump() : Any object in Python can be serialized into a byte stream and dumped as a file in the memory.

pickle.load() :It deserializes the byte stream to recreate the objects stored in the file and loads the object to memory.

### module vs package

**The module is a simple Python file that contains collections of functions and global variables and with having a .py extension file.**

**The package is a simple directory having collections of modules.** This directory contains Python modules and also having **init**.pyfile by which the interpreter interprets it as a Package. The package is simply a namespace. The package also contains sub-packages inside it.

example
Student(Package)
| **init**.py (Constructor)
| details.py (Module)
| marks.py (Module)
| collegeDetails.py (Module)

### static methods

used as the utility functions , alternate to the constuctor

```python
class MyClass:
	def __init__(self, value):
		self.value = value

	def get_value(self):
		return self.value

# Create an instance of MyClass
obj = MyClass(10)

# Call the get_value method on the instance
print(obj.get_value()) # Output: 10


```

### Inheritance

- Method overloading is not possible in python

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks.")

    def __str__(self):
        return f"My name is {self.name} "


# Create an instance of the child class
my_dog = Dog("Buddy")

# Call methods inherited from the parent class
print(my_dog.name)   # Output: Buddy
my_dog.speak()       # Output: Buddy barks.

```

## Lambda

### Map

```python
numbers = [1, 2, 3, 4, 5]
squared = map(lambda x: x**2, numbers) // returns MAP object
print(list(squared))  # Output: [1, 4, 9, 16, 25]

```

### Filter

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4, 6, 8, 10]

```

### DF

```python
import pandas as pd

# Create a DataFrame
df = pd.DataFrame({'numbers': [1, 2, 3, 4, 5]})

# Apply a lambda function to double the values in the 'numbers' column
df['doubled_numbers'] = df['numbers'].apply(lambda x: x * 2)

print(df)

```
