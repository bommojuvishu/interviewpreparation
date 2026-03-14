# List methods

- append

```python
# Adds List Element as value of List.
List = ['Mathematics', 'chemistry', 1997, 2000]
List.append(20544)
print(List)
```

- insert

```python
List = ['Mathematics', 'chemistry', 1997, 2000]
# Insert at index 2 value 10087
List.insert(2, 10087)
print(List)
```

- extend

```python
List1 = [1, 2, 3]
List2 = [2, 3, 4, 5]
# Add List2 to List1
List1.extend(List2)
print(List1)
# Add List1 to List2 now
List2.extend(List1)
print(List2)
```

- index

```python
List = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1]
print(List.index(2))
```

- sort

```python
List = [2.3, 4.445, 3, 5.33, 1.054, 2.5]
#Reverse flag is set True
List.sort(reverse=True)
#List.sort().reverse(), reverses the sorted list
print(List)
```

- pop

````python
List = [2.3, 4.445, 3, 5.33, 1.054, 2.5]
print(List.pop(0))

# Problems

## Palindrone

- for palidrone , start in the mid and check left and right
  https://leetcode.com/problems/palindromic-substrings/

```python
    def countSubstrings(self, s: str) -> int:
        res = 0

        for i in range(len(s)):
            res += self.countPali(s, i, i)
            res += self.countPali(s, i, i + 1)
        return res

    def countPali(self, s, l, r):
        res = 0
        while l >= 0 and r < len(s) and s[l] == s[r]:
            res += 1
            l -= 1
            r += 1
        return res
````

---

# String methods

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

---

## Dictionary

To check whether two dictionaries or sets are equal in Python, you can use the == operator:
Two dictionaries are equal if they have the same key-value pairs, regardless of order.

```python
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 2, 'a': 1, 'c': 3}

print(dict1 == dict2)  # True (order doesn't matter in dictionaries)

my_dict = {'apple': 10, 'banana': 5, 'cherry': 8}
del my_dict['banana']
print(my_dict)  # Output: {'apple': 10, 'cherry': 8}

my_dict = {'apple': 10, 'banana': 5, 'cherry': 8}
value = my_dict.pop('banana')
print(value)     # Output: 5
print(my_dict)   # Output: {'apple': 10, 'cherry': 8}

# With default:
value = my_dict.pop('orange', 0)
print(value)     # Output: 0


```

---

## Sets

A set in Python is an unordered collection of unique elements. It supports various operations for adding, removing, and performing set operations like union and intersection.
it is same as dictionary but stores single value

```python

data = ['apple', 'banana', 'apple', 'orange', 'banana']
unique_items = set(data)
print(unique_items)
# Output: {'apple', 'banana', 'orange'}


if 'banana' in set_a:
    print("Found banana!")

#remove

my_set = {1, 2, 3}
my_set.remove(2)
print(my_set)  # Output: {1, 3}

# 🚫 Does not raise an error if the element is not present.
my_set = {1, 2, 3}
my_set.discard(4)  # No error even though 4 is not in the set
print(my_set)  # Output: {1, 2, 3}

```

#### Equal

Two sets are equal if they contain the same elements, regardless of order.

```python
set1 = {1, 2, 3}
set2 = {3, 2, 1}

print(set1 == set2)  # True (order doesn't matter in sets)

```

#### Example: Convert List to Set

```python
my_list = [1, 2, 3, 4, 5, 2, 3, 1]
my_set = set(my_list)

print(my_set)  # Output: {1, 2, 3, 4, 5}

```

### 🚀 Summary: When to Use Each?

- **Use a `list` when:** You need an **ordered** collection, allow **duplicates**, or require **indexing**.
- **Use a `set` when:** You need **unique elements** and **fast lookups** but don't care about order.
- **Use a `dict` when:** You need to store **key-value pairs** with **fast access**.

---

## 🔄 **\. Using `for` loop to reverse:**

### Option 1: `range(start, end, step)`

If you want to iterate backwards from `n-1` to `0`, you can use:

```python
for i in range(n-1, -1, -1):
    print(i)
```

👉 Here’s what’s happening:

- `start = n-1`
- `end = -1` (exclusive, so it stops at 0)
- `step = -1` (to decrement)

Example:

```python
arr = [5, 4, 3, 2, 1]
for i in range(len(arr)-1, -1, -1):
    print(arr[i])
```

---
