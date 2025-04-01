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
class Node:
    """A node in a doubly linked list"""
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    """LRU Cache implemented using a hash map and a doubly linked list"""
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # Hash map to store key-node pairs

        # Dummy head and tail to manage the doubly linked list easily
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        """Removes a node from the doubly linked list"""
        prev, nxt = node.prev, node.next
        prev.next = nxt
        nxt.prev = prev

    def _add_to_front(self, node):
        """Adds a node right after the head (Most Recently Used)"""
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        """Fetches the value of a key and moves it to the front if found"""
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)  # Move accessed node to front
            self._add_to_front(node)
            return node.value
        return -1  # Key not found

    def put(self, key: int, value: int):
        """Adds a key-value pair or updates it; removes LRU if capacity is exceeded"""
        if key in self.cache:
            self._remove(self.cache[key])  # Remove old node

        new_node = Node(key, value)
        self._add_to_front(new_node)  # Insert new node at front
        self.cache[key] = new_node

        if len(self.cache) > self.capacity:  # Remove LRU node
            lru_node = self.tail.prev
            self._remove(lru_node)
            del self.cache[lru_node.key]  # Remove from hash map

# Example Usage
lru = LRUCache(3)
lru.put(1, 100)
lru.put(2, 200)
lru.put(3, 300)
print(lru.get(1))  # 100 (moves to most recently used)
lru.put(4, 400)    # Removes least recently used key (2)
print(lru.get(2))  # -1 (not found)
print(lru.get(3))  # 300

```

### **Why This Algorithm is Efficient?**

- **GET(query) → O(1)**

  - Uses `lookup` (hashmap) for direct access.
  - Moves node to front in O(1) with linked list.

- **SET(query, result) → O(1)**

  - Updates value in `lookup` in O(1).
  - Moves existing node to front in O(1).
  - If full, removes **tail (LRU)** in O(1).
