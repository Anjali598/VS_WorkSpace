import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  // Load saved todos from localStorage when the app starts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todolist")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  // Function to add or update a task
  const handleAddOrUpdateTodo = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTaskIndex ? { ...todo, text: task } : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTaskIndex(null);
    } else {
      const newTask = { text: task, completed: false };
      setTodos([...todos, newTask]);
    }

    setTask("");
  };

  // Function to delete a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Function to toggle task completion
  const handleToggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to start editing a task
  const handleEditTodo = (index) => {
    setTask(todos[index].text);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  // Function to sort tasks
  const handleSortTasks = (criteria) => {
    const sortedTodos = [...todos];
    if (criteria === "alphabetical") {
      sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
    } else if (criteria === "status") {
      sortedTodos.sort((a, b) => a.completed - b.completed);
    }
    setTodos(sortedTodos);
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add or edit a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddOrUpdateTodo} style={styles.addButton}>
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <div style={styles.sortButtons}>
        <button
          onClick={() => handleSortTasks("alphabetical")}
          style={styles.sortButton}
        >
          Sort Alphabetically
        </button>
        <button
          onClick={() => handleSortTasks("status")}
          style={styles.sortButton}
        >
          Sort by Status
        </button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <span
              onClick={() => handleToggleCompletion(index)}
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => handleEditTodo(index)}
                style={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(index)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  sortButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  sortButton: {
    padding: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#f8f9fa",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    flexGrow: 1,
    textAlign: "left",
  },
  editButton: {
    padding: "5px",
    marginRight: "5px",
    border: "none",
    backgroundColor: "#ffc107",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Todo;
