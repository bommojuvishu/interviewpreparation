# TODO

```js
import { useEffect, useState } from "react";

export default function App() {
  // ---------- STATE ----------
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  // ---------- SIDE EFFECT ----------
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ---------- HANDLERS ----------
  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
      },
    ]);

    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // ---------- UI ----------
  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
