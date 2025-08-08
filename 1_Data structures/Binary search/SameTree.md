Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

example 1 :

```
   1         1
  / \       / \
 2   3     2   3

```

output : true

example 2 :

```
   1         1
  /         \
 2           2

```

output : false

```python
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True

        if p and q and p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

        return False
```

# Note

intead of doing the depth for search of each tree , at a time both are compared
