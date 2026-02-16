# Problem

The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

The length of a path between two nodes in a binary tree is the number of edges between the nodes.

Given the root of a binary tree root, return the diameter of the tree.

```
        1
       / \
      2   3
     / \
    4   5

```

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

# Solution

```python
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Define a recursive function to calculate the diameter
        def diameter(node, res):
            # Base case: if the node is None, return 0
            if not node:
                return 0

            # Recursively calculate the diameter of left and right subtrees
            left = diameter(node.left, res)
            right = diameter(node.right, res)

            # Update the maximum diameter encountered so far
            res = max(res, left + right)

            # Return the depth of the current node
            return max(left, right) + 1

        # Initialize a list to hold the maximum diameter encountered
        res = 0
        # Call the diameter function starting from the root
        diameter(root, res)
        # Return the maximum diameter encountered
        return res
```
