# String DSA problems

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 10/12/2025 16:37:53  
**Updated:** 10/12/2025 16:38:38  
**Exported:** 10/12/2025 16:38:51  
**Link:** [https://chatgpt.com/c/68eb8bfe-85f0-8321-9fb5-2de5f940fcff](https://chatgpt.com/c/68eb8bfe-85f0-8321-9fb5-2de5f940fcff)  

## Prompt:
String DSA  problems with their leetcode links

## Response:
Here’s a **comprehensive list of popular String DSA problems** with their **LeetCode links**, organized by **patterns** to help you master the topic efficiently 👇

* * *

### 🧠 **1\. Basic String Manipulation**

| Problem | Link |
| --- | --- |
| Reverse String | LeetCode 344 |
| Reverse Words in a String | LeetCode 151 |
| Reverse Words in a String III | LeetCode 557 |
| Valid Palindrome | LeetCode 125 |
| Implement `strStr()` (Substring Search) | LeetCode 28 |
| Length of Last Word | LeetCode 58 |

* * *

### 🧩 **2\. Palindrome Problems**

| Problem | Link |
| --- | --- |
| Longest Palindromic Substring | LeetCode 5 |
| Palindrome Partitioning | LeetCode 131 |
| Palindrome Partitioning II (Min Cuts) | LeetCode 132 |
| Valid Palindrome II (at most one removal) | LeetCode 680 |
| Shortest Palindrome | LeetCode 214 |

* * *

### 🧮 **3\. Anagram / Frequency Problems**

| Problem | Link |
| --- | --- |
| Valid Anagram | LeetCode 242 |
| Group Anagrams | LeetCode 49 |
| Find All Anagrams in a String | LeetCode 438 |
| Permutation in String | LeetCode 567 |
| Minimum Window Substring | LeetCode 76 |

* * *

### 🔁 **4\. Sliding Window on Strings**

| Problem | Link |
| --- | --- |
| Longest Substring Without Repeating Characters | LeetCode 3 |
| Longest Repeating Character Replacement | LeetCode 424 |
| Substring with Concatenation of All Words | LeetCode 30 |
| Repeated DNA Sequences | LeetCode 187 |

* * *

### ✍️ **5\. Pattern Matching / Subsequence**

| Problem | Link |
| --- | --- |
| Is Subsequence | LeetCode 392 |
| Regular Expression Matching | LeetCode 10 |
| Wildcard Matching | LeetCode 44 |
| Find the Index of the First Occurrence (KMP / Naive) | LeetCode 28 |

* * *

### 🔤 **6\. String Compression / Decoding**

| Problem | Link |
| --- | --- |
| String Compression | LeetCode 443 |
| Decode String | LeetCode 394 |
| Multiply Strings | LeetCode 43 |
| Add Strings | LeetCode 415 |

* * *

### 🧠 **7\. Advanced / Trie / Hashing**

| Problem | Link |
| --- | --- |
| Longest Common Prefix | LeetCode 14 |
| Implement Trie (Prefix Tree) | LeetCode 208 |
| Replace Words | LeetCode 648 |
| Word Break | LeetCode 139 |
| Word Break II | LeetCode 140 |
| Word Search | LeetCode 79 |

* * *

### 🧠 **8\. Miscellaneous / Trickier**

| Problem | Link |
| --- | --- |
| Zigzag Conversion | LeetCode 6 |
| Integer to Roman | LeetCode 12 |
| Roman to Integer | LeetCode 13 |
| Count and Say | LeetCode 38 |
| Text Justification | LeetCode 68 |

* * *

Would you like me to give you a **progressive study plan (Easy → Medium → Hard)** for these string problems (e.g., 2 per day)? 📝✨

## Prompt:
patterns

## Response:
Great question 👌  
Here are the **most important String DSA Problem Patterns** you should master — these patterns repeatedly appear in LeetCode and real interviews:

* * *

### 🧠 **1\. Reversal & Two-Pointer Pattern**

**Key Idea:** Use two pointers (start/end) to reverse or check substrings efficiently.

**Common Problems:**

*   Reverse the string / words in-place
*   Check palindrome / valid palindrome
*   Reverse segments (e.g., every k characters)

✅ **Examples:**

*   344\. Reverse String
*   125\. Valid Palindrome
*   557\. Reverse Words in a String III

* * *

### 🪄 **2\. Sliding Window / Substring Pattern**

**Key Idea:** Maintain a moving window using two pointers to find substrings with certain properties (length, uniqueness, frequency).

**Common Problems:**

*   Longest substring without repeating chars
*   Minimum window containing pattern
*   Find all anagrams / permutations

✅ **Examples:**

*   3\. Longest Substring Without Repeating Characters
*   76\. Minimum Window Substring
*   567\. Permutation in String
*   438\. Find All Anagrams in a String

* * *

### ✍️ **3\. Frequency Counting / Hash Map Pattern**

**Key Idea:** Use hash maps (or arrays of size 26/128) to count character occurrences, compare frequency windows, or group strings.

**Common Problems:**

*   Valid anagram
*   Group anagrams
*   Find repeated sequences

✅ **Examples:**

*   242\. Valid Anagram
*   49\. Group Anagrams
*   187\. Repeated DNA Sequences

* * *

### 🔁 **4\. Palindrome Pattern (Expand Around Center / DP)**

**Key Idea:** Palindromic substrings often use center expansion or dynamic programming to find longest substrings or partition.

**Common Problems:**

*   Longest palindromic substring
*   Palindrome partitioning
*   Valid palindrome II (with at most one deletion)

✅ **Examples:**

*   5\. Longest Palindromic Substring
*   131\. Palindrome Partitioning
*   680\. Valid Palindrome II

* * *

### 🧬 **5\. Pattern Matching / Subsequence / KMP**

**Key Idea:** Use dynamic programming, subsequence checks, or efficient substring search algorithms (like KMP).

**Common Problems:**

*   Subsequence check
*   Wildcard / regex matching
*   Substring search (strStr)

✅ **Examples:**

*   392\. Is Subsequence
*   10\. Regular Expression Matching
*   44\. Wildcard Matching
*   28\. Find the Index of the First Occurrence

* * *

### 🧠 **6\. Stack / Recursion Pattern**

**Key Idea:** Use a stack or recursion to decode nested strings or perform transformations.

**Common Problems:**

*   Decode string (e.g., `3[a2[c]]`)
*   Parentheses validation (though not purely string sometimes)
*   Expression evaluation

✅ **Examples:**

*   394\. Decode String

* * *

### 🏗 **7\. Trie / Prefix Tree Pattern**

**Key Idea:** For prefix searches, word replacements, dictionary problems — build a Trie data structure.

**Common Problems:**

*   Prefix search
*   Word break using dictionary
*   Replace root words

✅ **Examples:**

*   208\. Implement Trie
*   648\. Replace Words
*   139\. Word Break

* * *

### 🧮 **8\. DP on Strings Pattern**

**Key Idea:** Dynamic Programming helps in problems like edit distance, regex matching, or word breaks.

**Common Problems:**

*   Edit distance between strings
*   Regex / wildcard matching
*   Word break segmentation

✅ **Examples:**

*   72\. Edit Distance
*   10\. Regular Expression Matching
*   139\. Word Break

* * *

### 🧠 **9\. Math / Conversion / Miscellaneous Pattern**

**Key Idea:** Handle problems involving Roman numerals, zigzag conversion, encoding, etc.

✅ **Examples:**

*   12\. Integer to Roman
*   6\. Zigzag Conversion
*   38\. Count and Say

* * *

### 📝 **Quick Summary Table**

| Pattern | Techniques | Common Tools |
| --- | --- | --- |
| Reversal | Two pointers | In-place swaps, index manipulation |
| Sliding Window | Expand/contract window | HashMap, character count |
| Frequency | Counting characters | HashMap / array |
| Palindrome | Expand around center, DP | String slicing |
| Pattern Matching | KMP, DP, regex | Prefix tables |
| Stack / Recursion | Decode, evaluate | Stack, recursion |
| Trie / Prefix | Tree structure | Trie nodes, insert/search |
| DP on Strings | Matrix-based DP | 2D arrays |
| Misc | Math / conversions | String building |

* * *

Would you like me to give you a **pattern-based 4-week practice roadmap** (Easy → Medium → Hard) for these string patterns? 🗓️💪



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)