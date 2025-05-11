# Table of contents

- [Linkedlist](#linkedList)
- [My Section Title](#my-section-title)

# Approach

- start with the base or smaller test case
- check if empty or single value given as parameter , then build the solution on it
- write a basic algo before proceding
- check the data given ( if it can used as for loop condition)
- use nonlocal keyword to refer the main function variable inside the nested function
- Analyse visually
  - https://leetcode.com/problems/longest-consecutive-sequence/description/
  - https://www.youtube.com/watch?v=P6RZZMu_maU

# Shortcut

- AVL and Red Black tree implementation is very big , most probably won't be ask in the interview

## Tips

- Arrays : check if can sort the array , it may help any way
  - str.sort() : in line , only list
  - sorted(str , reverse = True) : new string , both string and list
- Arrays/ String : remove duplicate set(str) or use dictionary { value :value}
- Array: split a string into a list of characters
  - list("foobar") # ['f', 'o', 'o', 'b', 'a', 'r']
- Array temp: []\*len(arr)
- use ans = collections.defaultdict(list)
- heapq for sorting
  - heapq.heapify(li) ( default ASC)
  - heapq.heappop(li)
- problem related to in place array , try two pointer approach
  - https://github.com/sadanandpai/dsa-interview-challenges/blob/main/problems/warmup.md#squares-of-a-sorted-array
- string split,join
  - string.split(' ')
  - ' '.join(list_string)
- range(start, stop, step)

  - range(len(arr)
  - range(3 , 6)
  - range(len(arr), 0 , -1) // in reverse
  - for num in arr[::-1]: // iternate reverse
  - print(arr[::-1]) // print reverse of arr

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

## Dictionary

To check whether two dictionaries or sets are equal in Python, you can use the == operator:
Two dictionaries are equal if they have the same key-value pairs, regardless of order.

```python
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 2, 'a': 1, 'c': 3}

print(dict1 == dict2)  # True (order doesn't matter in dictionaries)

```

## Sets

A set in Python is an unordered collection of unique elements. It supports various operations for adding, removing, and performing set operations like union and intersection.
it is same as dictionary but stores single value

```python

thisset = {"apple", "banana", "cherry", "apple"}
thisset = set(("apple", "banana", "cherry"))

thisset.add("orange")

if "banana" in my_set:
    print("2 is in the set")
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

# Heap

arr = [64, 25, 12, 22, 11]
print(selection_sort(arr)) # Output: [11, 12, 22, 25, 64]

```python
# importing "heapq" to implement heap queue
import heapq

# initializing list
li = [5, 7, 9, 1, 3]

# using heapify to convert list into heap
heapq.heapify(li)

# printing created heap
print("The created heap is : ", end="")
print(list(li))

# using heappush() to push elements into heap
# pushes 4
heapq.heappush(li, 4)

# printing modified heap
print("The modified heap after push is : ", end="")
print(list(li))

# using heappop() to pop smallest element
print("The popped and smallest element is : ", end="")
print(heapq.heappop(li))

```

Problems

- https://leetcode.com/problems/top-k-frequent-elements/solutions/789282/python-heap/

# Arrays

instead of for loop ,he has used 2 pointer to decrease the iteration

https://leetcode.com/problems/squares-of-a-sorted-array/description/

```python
    def sortedSquares(self, nums: List[int]) -> List[int]:
        l = 0
        r = len(nums) - 1
        while(l <= r):
            print(l)
            nums[l], nums[r] = nums[l]** 2, nums[r]**2
            l += 1
            r -= 1

        return sorted(nums)
```

### findKthLargest

https://leetcode.com/problems/kth-largest-element-in-an-array/description/

```python
    def findKthLargest(self, nums: List[int], k: int) -> int:
        li = [x for x in nums]
        heapq.heapify(li)
        print(li)
        while len(li) > k:
            heapq.heappop(li)
        return li[0]
```

# Two pointer approach

Testcase :
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.

```python
def twoSum(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left < right:
        total = numbers[left] + numbers[right]

        if total == target:
            return [left + 1, right + 1]  # 1-based index
        elif total < target:
            left += 1
        else:
            right -= 1

```

# Binary Search

- // is the floor division : 15//2 , output= 7
- mid formula :
  m = l + ((r - l) // 2)
  mid = (high +low) // 2

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2  # Middle index

        if arr[mid] == target:
            return mid  # Element found
        elif arr[mid] < target:
            left = mid + 1  # Search in right half
        else:
            right = mid - 1  # Search in left half

    return -1  # Element not found

# Example Usage
arr = [10, 20, 30, 40, 50, 60, 70]
target = 40
print(binary_search(arr, target))  # Output: 3 (index of 40)

```

# Stack

- check if stack is empty or not , then check for value
  - if not stack or stack.pop() != mapp[ch]:
  - if len(arr)> 0 and ( arr[-1] == x ):

# LinkedList

⚠️**Tip** : for removing/inserting always stop one node before

```
if node.next == val:
```

⚠️**Tip** : create a dummy node and attach to head or tail

```
dummy = ListNode()
tail = dummy
```

### Two pointer approach

    - https://leetcode.com/problems/middle-of-the-linked-list/

```python

    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
      slow = fast = head

      while fast and fast.next :
          slow = slow.next
          fast = fast.next.next

      return slow
```

### create dummy node in linkedlist

    - https://leetcode.com/problems/merge-two-sorted-lists/

```python

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy

        while list1 and list2:
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2
        print(dummy)
        return dummy.next

```

- https://leetcode.com/problems/reverse-linked-list/

- remove n th node from the end of the list ( 2 pointer approach )

```python
class Solution:
  def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
      dummy = ListNode(0, head)
      left = dummy
      right = head

      while n > 0:
          right = right.next
          n -= 1

      while right:
          left = left.next
          right = right.next

      # delete
      left.next = left.next.next
      return dummy.next

```

# Trees

### BFS

```python
   def BFS(self):
      current_node = self.root
      queue = []
      results = []
      queue.append(current_node)

      while len(queue) > 0:
          current_node = queue.pop(0)
          results.append(current_node.value)
          if current_node.left is not None:
              queue.append(current_node.left)
          if current_node.right is not None:
              queue.append(current_node.right)
      return results


```

## Preorder Transversal

```python
def dfs_pre_order(self):
	results = []
	res = []
	def preorder(root):
	    if not root:
		return
	    res.append(root.val)
	    preorder(root.left)
	    preorder(root.right)
	preorder(root)
	return res

```

# Trees : Mmax dept using recursive DFS

```python
# RECURSIVE DFS
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

```

# Sort

## Selection sort

- always 2 loops

```python
def selection_sort(arr):
    n = len(arr)  # Get the length of the array
    for i in range(n):  # Outer loop runs n times
        min_index = i  # Assume current index has the smallest value
        for j in range(i + 1, n):  # Find the smallest element in the remaining array
            if arr[j] < arr[min_index]:  # If found a smaller element
                min_index = j  # Update the index of the smallest element
        arr[i], arr[min_index] = arr[min_index], arr[i]  # Swap the smallest element with the current position
    return arr
```

## Fibonacci

```python
def Fibonacci(n):

    if n < 0:
        print("Incorrect input")

    elif n == 0:
        return 0

    elif n == 1 or n == 2:
        return 1

    else:
        return Fibonacci(n-1) + Fibonacci(n-2)

print(Fibonacci(9))

```

## Hashing

### Problem 1:

https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "aa", magazine = "ab"
Output: false

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hash_map = {}

        for i in magazine:
            hash_map[i] = hash_map.get(i, 0) + 1

        for i in ransomNote:
            if i in hash_map and hash_map[i] != 0:
                hash_map[i] = hash_map[i] - 1
            else:
                return False

        return True
```

## Kandane Algorithn

Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

```python
def kadane(arr):
    max_so_far = float('-inf')
    max_ending_here = 0
    start = end = s = 0  # Variables to track subarray indices

    for i in range(len(arr)):
        max_ending_here += arr[i]

        if max_ending_here > max_so_far:
            max_so_far = max_ending_here
            start = s
            end = i

        if max_ending_here < 0:
            max_ending_here = 0
            s = i + 1  # Start new subarray

    return max_so_far, arr[start:end+1]  # Return max sum and subarray

# Example usage
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_sum, subarray = kadane(arr)
print("Maximum Sum:", max_sum)  # Output: 6
print("Subarray:", subarray)  # Output: [4, -1, 2, 1]

```

another implementation

```python
def kadane(arr):
    max_ending_here = max_so_far = arr[0]  # initialize with first element
    for x in arr[1:]:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far

```
