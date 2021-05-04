import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai"; //npm install react-icons --save
import { AiOutlineCheck } from "react-icons/ai";

const Task = ({ todos, setTodos, completeTodo, removeTodo }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "TodoCpl" : "Todo"} key={index}>
      {todoEditing === todo.id ? (
        <div>
          <Input
            className="EditInput"
            title="Wpisz zadanie"
            value={editingText}
            inputChange={setEditingText}
          />
          <h4>{todo.text}</h4>
        </div>
      ) : (
        <div>{todo.text}</div>
      )}

      {todoEditing === todo.id ? (
        <Button
          className="EditButton"
          title="Potwierdź"
          onClickButton={() => editTodo(todo.id)}
        ></Button>
      ) : (
        <div className="icons">
          <AiOutlineClose
            onClick={() => removeTodo(todo.id)}
            className="ButtonTodo"
          />

          <AiOutlineEdit onClick={() => setTodoEditing(todo.id)} />
          <AiOutlineCheck
            onClick={() => completeTodo(todo.id)}
            className="ButtonTodo"
          />
        </div>
      )}
    </div>
  ));
};

export default Task;
