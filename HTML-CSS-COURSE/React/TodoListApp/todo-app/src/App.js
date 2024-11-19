import React, { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [compTodos, setCompTodo] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDesc,
    };

    let updatedTodoArray = [...allTodos];
    updatedTodoArray.push(newTodoItem);
    setTodos(updatedTodoArray);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArray));
  };

  const handeleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleCompleteTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedOn = dd + "-" + mm + "-" + yyyy + "at" + h + ":" + m + ":" + s;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompleteArray = [...compTodos];
    updatedCompleteArray.push(filteredItem);
    setCompTodo(updatedCompleteArray);
    handeleDeleteTodo(index);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompleteArray)
    );
  };

  const handeleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...compTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompTodo(reducedTodo);
  };

  const handleEdit = (index, item) => {
    console.log(index);
    setCurrentEdit(index);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((preValue) => {
      return { ...preValue, title: value };
    });
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((preValue) => {
      return { ...preValue, description: value };
    });
  };

  const handleUpdateTodo = () => {
    let newTodo = [...allTodos];
    newTodo[currentEdit] = currentEditedItem;
    setTodos(newTodo);
    setCurrentEdit("");
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));

    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompTodo(savedCompletedTodo);
    }
  }, []);

  return (
    <div className="App">
      <h1>My TODOs</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What's the task title ?"
            ></input>
          </div>

          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="What's the task description ?"
            ></input>
          </div>

          <div className="todo-input-item">
            <button
              type="button"
              className="btn-primary"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            type="button"
            className={`btn-secondry ${isCompleteScreen === false && `active`}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            ToDo
          </button>
          <button
            type="button"
            className={`btn-secondry ${isCompleteScreen === true && `active`}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {isCompleteScreen === false &&
            allTodos.map((item, index) => {
              if (currentEdit === index) {
                return (
                  <div className="edit-wrapper" key={index}>
                    <input
                      placeholder="Updated Title"
                      onChange={(e) => handleUpdateTitle(e.target.value)}
                      value={currentEditedItem.title}
                    ></input>
                    <textarea
                      placeholder="Updated Description"
                      rows={4}
                      onChange={(e) => handleUpdateDescription(e.target.value)}
                      value={currentEditedItem.description}
                    ></textarea>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={handleUpdateTodo}
                    >
                      Update
                    </button>
                  </div>
                );
              } else {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p> {item.description}</p>
                    </div>
                    <div>
                      <AiOutlineDelete
                        className="delete-icon"
                        onClick={() => handeleDeleteTodo(index)}
                        title="Delete?"
                      />
                      <BsCheckLg
                        className="check-icon"
                        onClick={() => handleCompleteTodo(index)}
                        title="Complete?"
                      />
                      <AiOutlineEdit
                        className="edit-icon"
                        onClick={() => handleEdit(index, item)}
                        title="Edit?"
                      />
                    </div>
                  </div>
                );
              }
            })}

          {isCompleteScreen === true &&
            compTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p> {item.description}</p>
                    <p>
                      <small>Completed on : {item.completedOn}</small>
                    </p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handeleDeleteCompletedTodo(index)}
                      title="Delete?"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
