import React, { useState } from "react";

const App = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div style={styles.container}>
            <h2>To-Do List</h2>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={styles.input}
                    placeholder="Enter a task..."
                />
                <button onClick={addTodo} style={styles.addButton}>
                    Add
                </button>
            </div>
            <ul style={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id} style={styles.listItem}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                            style={{
                                ...styles.text,
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={styles.deleteButton}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
    },
    input: {
        flex: 1,
        padding: "8px",
        fontSize: "16px",
    },
    addButton: {
        padding: "8px",
        marginLeft: "5px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
    list: {
        listStyleType: "none",
        padding: 0,
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #ccc",
    },
    text: {
        flex: 1,
        marginLeft: "10px",
    },
    deleteButton: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
    },
};

export default App;
