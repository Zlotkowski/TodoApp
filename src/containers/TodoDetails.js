import React, { useContext, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai"; //npm install react-icons --save
import { AiOutlineCheck } from "react-icons/ai";
import { ACTIONS } from "../hooks/DataReducer";
import Input from "../components/Input";
import Button from "../components/Button";

export default function TodoDetails({ todo }) {
  const { dispatch } = useContext(DataContext);
  const [todoEdit, setTodoEdit] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.UPDATE_TODO,
      id: todo.id,
      todo: { editingTitle },
    });
    setEditingTitle("");
    setTodoEdit(null);
  };

  return (
    <div className={todo.isComplete ? "TodoCpl" : "Todo"} key={todo.id}>
      {todoEdit === todo.id ? (
        <div>
          <Input
            className="EditInput"
            title="Wpisz zadanie"
            value={editingTitle}
            inputChange={setEditingTitle}
          />

          <h4>{todo.text}</h4>
        </div>
      ) : (
        <div>{todo.text}</div>
      )}

      {todoEdit === todo.id ? (
        <Button
          className="EditButton"
          title="Potwierdź"
          onClickButton={handleUpdate}
        />
      ) : (
        <div className="icons">
          <AiOutlineClose
            onClick={() => dispatch({ type: ACTIONS.DEL_TODO, id: todo.id })}
            className="ButtonTodo"
          />

          <AiOutlineEdit onClick={() => setTodoEdit(todo.id)} />

          <AiOutlineCheck
            onClick={() => dispatch({ type: ACTIONS.CMPL_TODO, id: todo.id })}
            className="ButtonTodo"
          />
        </div>
      )}
    </div>
  );
}
