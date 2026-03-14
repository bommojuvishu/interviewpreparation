- [NextJS](#Nextjs)
- [Links](#links)
- [Javascript](#javascript)
- [Database](#database)
- [CSS](#css)
- [Authenticaton](#authentication)
- [HTML](#html)

# permission to the folder

sudo chmod -R 777 directory_name

# Nextjs

sudo npx create-next-app@latest

### Link

create a folder "new-route" under the app folder

```js
// Button.js
import Link from "next/link";

export default function Button() {
  return (
    <Link href="/new-route">
      <button>Go to New Route</button>
    </Link>
  );
}
```

### HTMLFor

change normal upload input to the image tag that activates the normal one , on click of it

```js
function ImageSelection() {
  return (
    <div>
      ImageSelection
      <label htmlFor="upload-image">
        <Image
          src="/uploadimage.png"
          alt="image"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </label>
      <input
        type="file"
        accept="image/*"
        id="upload-image"
        style={{ display: "none" }}
      ></input>
    </div>
  );
}
```

### deployment

- create the layout.js with the meta data
- add icon to the website
-
-

# Reacjs

## Installation
```
npm create vite@latest my-vue-app -- --template react
```

### unique identifier

Date.now()

```js
const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text, completed: false }]);
};
```

### emoji

```js
return (
  <div>
    <button onClick={() => addTodo("New Task")}>Add Task</button>
    {todos.map((todo) => (
      <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
        {todo.text} {todo.completed ? "✅" : "❌"}
      </div>
    ))}
  </div>
);
```

# Links

- git ignore templates
  - https://github.com/github/gitignore
- contribute to the open source projects
  - https://github.com/MunGell/awesome-for-beginners
  - learn git website
    - https://learngitbranching.js.org/
  - hacker screen : https://hackertyper.net/

# Javascript

## Methods

- find

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

- some
  The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

## Unique key

The generateChartKey function generates a unique string key based on the current timestamp and an additional complement value. The result is a base 36 string, which is a compact and unique representation of the key.

```javascript
export const generateChartKey = (complement) =>
  (+new Date() + complement).toString(36);
```

# Database

### RETURNING

he `RETURNING` keyword is used in `INSERT`, `UPDATE`, and `DELETE` statements to return values from rows that were affected by the operation.
it can be used in the Auth API

```sql
INSERT INTO users (name, email)
VALUES ('Vishwanath', 'vishwanath@example.com')
RETURNING *;
```

# CSS

- tailwind templates
- https://preline.co/examples/hero-sections.html
- boostrap style tailwind
- https://daisyui.com/components/
- pico css for small projects

### h-screen

`h-screen` is a utility class that sets the height of an element to 100% of the viewport height. This means that the element will take up the full vertical space of the browser window, regardless of the device or screen size.

```html
<div className="flex justify-center items-center h-screen">
  <SignIn />
</div>
)
```

### hover animation

```
<Button className="hover:scale-105 transition-all" > hello </Button>
```

# Authentication

- plain username and password
- Hashing
- JWT
- OAuth

## Hashing

the passwords are stored in the hash function
once it is stored in the DB , we cannot change it back to plain password .
whenever user is enters passwword , it is compared with the password in the DB
but the common hashpasswords are avaible in the internet , it can be cross match and hacked

to check the strength of the hash password
http://password-checker.online-domain-tools.com/

# HTML

## input

HTML `<input>` tags come with various `type` attributes to create different types of input fields in forms. Here's a list of common input types and their functions:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input 1.**text**: Standard single-line text input.

```
<input type="text" placeholder="Enter your name">
```

2.**password**: A text field where input is hidden (e.g., for passwords).

```
<input type="password" placeholder="Enter your password">
```

3.**email**: A text field optimized for email addresses.

```
<input type="email" placeholder="Enter your email">
```

4.**datetime-local**: A date and time input control without timezone.

```
<input type="datetime-local">
```

5.**file**: A control for file uploads.

```
<input type="file" accept ="image/*" id="upload-image">
```
