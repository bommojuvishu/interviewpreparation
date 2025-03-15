## Universal selector

```css
body {
  font-family: sans-serif;
}

* {
  margin: 0;
}
```

```css
article *:first-child {
  font-weight: bold;
}
```

## List

Give the unordered list square bullets.
Give the unordered list items and the ordered list items a line-height of 1.5 of their font-size.
Give the ordered list lower alphabetical bullets.

```css
ul {
  list-style-type: square;
}

ul li,
ol li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}
```
