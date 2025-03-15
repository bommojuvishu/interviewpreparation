# General

- By default, most browsers set the root font-size to 16 pixels, so:

1rem = 16px
0.5rem = 8px
2rem = 32px

1cm = 37.8px = 25.2/64in

# Type fo boxes

In CSS, there are several types of boxes that play crucial roles in layout and styling. Understanding these different box types helps in designing and debugging web pages effectively. Here are the primary types of boxes in CSS:
a

1.  **Block Box**:

    - **Characteristics**: Occupies the full width available, with a line break before and after it.
    - **Elements**: `<div>`, `<p>`, `<h1>` to `<h6>`, `<section>`, `<article>`, etc.
    - **Layout**: Vertically stacked, respect margins, borders, padding.

2.  **Inline Box**:

    - **Characteristics**: Occupies only the space bounded by the tags, does not start on a new line.
    - **Elements**: `<span>`, `<a>`, `<strong>`, `<em>`, etc.
    - **Layout**: Laid out horizontally within a line, does not respect top and bottom margins.

3.  **Inline-block Box**:

    - **Characteristics**: Behaves like an inline box, but can have width and height set.
    - **Elements**: Any element can be made inline-block using `display: inline-block;`.
    - **Layout**: Sits inline with other elements but acts like a block element regarding width and height.

# Flex

initialise an item as flex

Complete doc on Flex : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
flex layout parameters : https://appbrewery.github.io/flex-layout/

exercise : https://flexboxfroggy.com/

.flex-container {  
display: flex;  
}

The flex container properties are:

- List item
- List item
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction

- column , row , column-reverse , row-reverse

#### justify-content

- center , flex-start , flex-end , space-around , space-between

## how to center the element horizontally and vertically at the center

```css
.container {
  font-family: arial;
  font-size: 24px;
  margin: 25px;
  width: 350px;
  height: 200px;
  outline: dashed 1px black;
  /* Center vertically and horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
}

.child {
  width: 50px;
  height: 50px;
  background-color: red;
}
```

The align-items property aligns items on the cross axis, which is the block axis running vertically. The justify-content property aligns items on the main axis, which is the inline axis running horizontally.

## flex-basis

along the main axis depending on the flex-direction

```
.container > * {
	flex-basis : 100px
}
```

### flex sizing

- in flex box , the priority of the element width will be as follows
  Content width < width < flex-basis < min-width / max-width
  ex: if 3 boxes in a flex container as

```css
.box1 {
  flex: 1;
}

.box2 {
  flex: 2;
}

.box3 {
  flex: 3;
}
```

from above code boxes occupying depending on the weightage
but the underlying config is

```css
.box2{
flex-grow :2
flex-shrink : 2
}
```

## selector

- nested
- id : #
- class : dot (.)
- alway recommended to use ID

```css
#author {
	font-style: italic
	font-size: 18px
}

#copyright {
	font-size: 16px
}

.related-author {
	font-size: 18px
}
```

## Colors

- two ways to declare colors
- hex and RGB
- RGB ( Red, Green , Blue)
- Hex ( 0 to FF 256)
  - 6 digit : each 2 places represent RGB

## Pseudo Classes

they are used to style elements based on user interaction, such as hovering over an element or clicking on it, as well as based on their structural position in the document tree. Some commonly used pseudo-classes include:

1.  :hover - Applies styles when the mouse pointer is over the element.
2.  :active - Applies styles when the element is being activated by the user (e.g., clicked).
3.  :focus - Applies styles when the element has keyboard focus.
4.  :visited - Applies styles to visited links.
5.  :first-child - Selects an element that is the first child of its parent.
6.  :last-child - Selects an element that is the last child of its parent.
7.  :nth-child() - Selects elements based on their position within a parent element.
8.  :nth-of-type() - Selects elements of a specific type based on their position within a parent element.

```css
a:link {
	color: #1098ad
	text-decoration: none
}
a:visited {
	color: #1098ad
}
```

## Conflict resolving priority

1.  **Inline styles**: Styles applied directly to an HTML element using the `style` attribute have the highest specificity and will override any other styles.
2.  **ID selectors**: Styles applied using ID selectors (`#id`) have a higher specificity than classes or tag selectors. However, it's considered best practice to avoid using IDs for styling to promote reusability and maintainability.
3.  **Class selectors, attribute selectors, and pseudo-classes**: These have the same specificity as they are represented by a single class, attribute, or pseudo-class.
4.  **Element selectors**: Selectors targeting HTML elements directly (e.g., `div`, `p`, `a`) have the lowest specificity.
5.  **!important**: Adding `!important` to a style declaration overrides all other styles, regardless of specificity. However, it's generally recommended to avoid using `!important` whenever possible, as it can lead to maintenance issues and make CSS harder to manage.
6.  **Specificity**: If multiple conflicting styles have the same level of specificity, the one declared last in the stylesheet or closest to the element being styled will take precedence.
7.  **Inheritance**: If no styles are explicitly applied to an element, it will inherit styles from its parent element. Inheritance can also affect the final style of an element.

```css
li {
color : red
color: green
}
// always the last style will get applied , that is why it is called cascading style sheet
```

Note : Adding `!important` to a style declaration overrides all other styles, regardless of specificity.

## Box model

- content
- padding
- border
- margin

Note: auto keyword automatically changes the height to maintain the aspect ratio

```css
.post-img {
	width: 800px
	height: auto
}
```

### custom container

```css
.container{
	width : 800px
	margin-left: auto
	margin-right: auto

}
```

### pseudo-elements

CSS pseudo-elements are used to style certain parts of an element. they have :: for the pseudo elements

- ::before
- ::after
- ::first-line
- ::first-letter
-

```css
<style>
  .box::before {
    content: "Before content";
    background-color: #f00;
    color: #fff;
  }
</style>

<div class="box">Element</div>

```

# Semantic elements

```html
<article>
  <aside>
    <details>
      <figcaption>
        <figure>
          <footer>
            <header>
              <main>
                <mark>
                  <nav>
                    <section>
                      <summary>
                        <time> </time>
                      </summary>
                    </section></nav
                ></mark>
              </main>
            </header>
          </footer>
        </figure>
      </figcaption>
    </details>
  </aside>
</article>
```

### Draw circle

```css
.red-circle {
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 50%;
}
```

# Different Position

In CSS, the `position` property specifies the type of positioning method used for an element. There are several types of positions you can use, each with different behaviors and use cases. Here are the main types of CSS positions:

### 1. `static`

- **Description**: This is the default value. Elements are positioned according to the normal flow of the document.
- **Use Case**: General use when no special positioning is needed.
- left and right parameters won't work
- **Example**:

```css

  `.static-element {
      position: static;
  }`
```

### 2. `relative`

- **Description**: The element is positioned relative to its normal position. Using `top`, `right`, `bottom`, or `left` will offset it from its normal position.
- **Use Case**: To move an element slightly from its original position without affecting the layout around it.
- **Example**:

```css
.relative-element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### 3. `absolute`

- **Description**: The element is positioned relative to its nearest positioned ancestor (i.e., the nearest ancestor that is not `static`). If no such ancestor exists, it uses the initial containing block (usually the viewport).
- **Use Case**: For elements that need to be placed precisely on the page, irrespective of the normal document flow.
- **Example**:

  ```css

  `.absolute-element {
      position: absolute;
      top: 50px;
      right: 30px;
  }`
  ```

### 4. `fixed`

- **Description**: The element is positioned relative to the viewport and does not move when the page is scrolled.
- **Use Case**: For elements like sticky headers, footers, or sidebars that should remain in a fixed position on the screen.
- **Example**:

```css

  `.fixed-element {
      position: fixed;
      bottom: 0;
      left: 0;
  }`
```

# display

The `display` property in CSS is used to control the layout behavior of an element. Here are the most commonly used values for the `display` property and their effects:

Angela URL : https://appbrewery.github.io/css-display/

1.  **block**: The element generates a block-level box. Examples include `<div>`, `<p>`, and `<h1>`.

```css
.block-element {
  display: block;
}
```

2.  **inline**: The element generates an inline-level box. Examples include `<span>`, `<a>`, and `<strong>`.

```css
.inline-element {
  display: inline;
}
```

3.  **inline-block**: The element generates a block container box that flows with surrounding inline content. Examples include `<img>`, `<button>`, and `<input>`.

```css
.inline-block-element {
  display: inline-block;
}
```

4.  **flex**: The element becomes a flex container, enabling the use of flexbox layout properties on its children.

```css
.flex-container {
  display: flex;
}
```

5.  **inline-flex**: The element becomes a flex container, but it is displayed inline.

```css
.inline-flex-container {
  display: inline-flex;
}
```

6.  **grid**: The element becomes a grid container, enabling the use of grid layout properties on its children.

```css
.grid-container {
  display: grid;
}
```

7.  **inline-grid**: The element becomes a grid container, but it is displayed inline.

```css
.inline-grid-container {
  display: inline-grid;
}
```

8.  **none**: The element is completely removed from the document flow and won't be displayed.

```css
.hidden-element {
  display: none;
}
```

9.  **table**: The element behaves like a `<table>`. Examples include `<table>`, `<tr>`, and `<td>`.

```css
.table-element {
  display: table;
}
```

10. **table-row**: The element behaves like a `<tr>`.

```css
.table-row-element {
  display: table-row;
}
```

11. **table-cell**: The element behaves like a `<td>`.

```css
.table-cell-element {
  display: table-cell;
}
```

12. **list-item**: The element behaves like a `<li>`.

```css
.list-item-element {
  display: list-item;
}
```

# Float

The `float` property in CSS is used to position an element to the left or right within its containing element, allowing text and inline elements to wrap around it. It's commonly used for creating layouts and wrapping text around images. Here are the values you can use with the `float` property and their effects:
https://developer.mozilla.org/en-US/docs/Web/CSS/float

1.  **left**: The element floats to the left side of its container.

```
.float-left {
    float: left;
}
.float-right {
    float: right;
}

```

# Media Queries

Basic Media Query for Mobile Devices:

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

Applying Different Styles for Tablets:

```css
@media (min-width: 601px) and (max-width: 1024px) {
  body {
    background-color: lightgreen;
  }
}
```

# Universal Selector

https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors

```
/* Selects all elements */
* {
  color: green;
}

```

select the immediate children

```
.container > * {
	flex-basis : 100px
}
```

## Overflow

In CSS, the overflow property controls how content that exceeds the dimensions of its container is handled. It has several values:

1. overflow: visible; (Default)

   Content overflows the container and is fully visible.
   Example:

```css
.box {
  width: 100px;
  height: 100px;
  overflow: visible;
}
```

2. overflow: hidden;

   Hides the overflowing content without scrollbars.

```css
.box {
  width: 100px;
  height: 100px;
  overflow: hidden;
}
```

3. overflow: scroll;

   Always shows scrollbars (both horizontal and vertical), even if content fits.

```css
.box {
  width: 100px;
  height: 100px;
  overflow: scroll;
}
```

4. overflow: auto;

   Adds scrollbars only if the content overflows.
   Example:

```css
.box {
  width: 100px;
  height: 100px;
  overflow: auto;
}
```

5. overflow-x and overflow-y

   Control horizontal (overflow-x) and vertical (overflow-y) overflow separately.

```css
.box {
  width: 100px;
  height: 100px;
  overflow-x: auto;
  overflow-y: hidden;
}
```

## hyperlink

This order is important because link styles build on one another. For example, the styles in the first rule will apply to all the subsequent ones. When a link is activated, it's usually also hovered over. If you put these in the wrong order, and you're changing the same properties in each ruleset, things won't work as you expect. To remember the order, you could try using a mnemonic like LoVe Fears HAte.

```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
```

## font-family

three ways fonts can be imported

- normal way as below
- download and create cutom font and import using the @font-face
- online font service (like google )

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

safe fonts
https://www.cssfontstack.com/

- WOFF/WOFF2 (Web Open Font Format versions 1 and 2)
- EOT (Embedded Open Type), TTF (TrueType Font)

### custom fonts

process is mentioned below
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts#web_fonts

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

## Grid

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

To create gaps between tracks, we use the properties

- column-gap for gaps between columns
- row-gap for gaps between rows
- gap as a shorthand for both

## Viewport meta tag

```css
<meta name="viewport" content="width=device-width,initial-scale=1" />

```

# Bootstrap

- breakpoints for the bootstrap

| Breakpoint              | Class Prefix | Range     |
| ----------------------- | ------------ | --------- |
| Extra small (xs)        | None         | `<576px`  |
| Small (sm)              | `.col-sm-`   | `≥576px`  |
| Medium (md)             | `.col-md-`   | `≥768px`  |
| Large (lg)              | `.col-lg-`   | `≥992px`  |
| Extra large (xl)        | `.col-xl-`   | `≥1200px` |
| Extra extra large (xxl) | `.col-xxl-`  | `≥1400px` |

```css
/* Extra small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  ...;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  ...;
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  ...;
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  ...;
}

/* Extra extra large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  ...;
}
```

- app brewsery exercise link
- https://appbrewery.github.io/bootstrap-layout/

for padding and margin
https://getbootstrap.com/docs/4.0/utilities/spacing/

- Canva dimensions : 1400 x 800
