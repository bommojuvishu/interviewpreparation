### **LRU Cache Algorithm Explanation with Example**

The **Least Recently Used (LRU) Cache** algorithm ensures that when the cache reaches its maximum size, it removes the **least recently used** entry before adding a new one. It is efficiently implemented using:

1.  **HashMap (Dictionary in Python)** → For O(1) access to cached items.
2.  **Doubly Linked List** → To maintain the order of usage (most recently used at the front, least recently used at the end).

### **Algorithm Steps**

1️⃣ **Initialization**:

- Maintain a **hashmap (`lookup`)** where `key → node` mapping is stored.
- Maintain a **doubly linked list (`linked_list`)** to track the order of recent usage.
- The **head** of the linked list is the **most recently used (MRU)**.
- The **tail** is the **least recently used (LRU)** and will be removed if the cache is full.

2️⃣ **GET(query)**:

- If `query` exists in the `lookup`, move the node to the **front (MRU)** and return the result.
- If it **does not exist**, return `None` (cache miss).

3️⃣ **SET(query, result)**:

- If `query` is **already in cache**, update its value and move it to the **front (MRU)**.
- If `query` **is not in cache**:

  - If cache **is full**, remove the **tail (LRU)** from both `lookup` and the `linked list`.
  - Add the new node at the **front (MRU)** and store it in `lookup`.

```python
%%writefile lru_cache.py
class Node(object):

    def __init__(self, results):
        self.results = results
        self.prev = None
        self.next = None


class LinkedList(object):

    def __init__(self):
        self.head = None
        self.tail = None

    def move_to_front(self, node):  # ...
    def append_to_front(self, node):  # ...
    def remove_from_tail(self):  # ...


class Cache(object):

    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.lookup = {}  # key: query, value: node
        self.linked_list = LinkedList()

    def get(self, query)
        """Get the stored query result from the cache.

        Accessing a node updates its position to the front of the LRU list.
        """
        node = self.lookup.get(query)
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, results, query):
        """Set the result for the given query key in the cache.

        When updating an entry, updates its position to the front of the LRU list.
        If the entry is new and the cache is at capacity, removes the oldest entry
        before the new entry is added.
        """
        node = self.lookup.get(query)
        if node is not None:
            # Key exists in cache, update the value
            node.results = results
            self.linked_list.move_to_front(node)
        else:
            # Key does not exist in cache
            if self.size == self.MAX_SIZE:
                # Remove the oldest entry from the linked list and lookup
                self.lookup.pop(self.linked_list.tail.query, None)
                self.linked_list.remove_from_tail()
            else:
                self.size += 1
            # Add the new key and value
            new_node = Node(results)
            self.linked_list.append_to_front(new_node)
            self.lookup[query] = new_node
```

### **Why This Algorithm is Efficient?**

- **GET(query) → O(1)**

  - Uses `lookup` (hashmap) for direct access.
  - Moves node to front in O(1) with linked list.

- **SET(query, result) → O(1)**

  - Updates value in `lookup` in O(1).
  - Moves existing node to front in O(1).
  - If full, removes **tail (LRU)** in O(1).
