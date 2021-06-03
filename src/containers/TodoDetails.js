import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai"; //npm install react-icons --save
import { AiOutlineCheck } from "react-icons/ai";
import { ACTIONS } from "../hooks/DataReducer";
import { useHistory } from "react-router-dom";

export default function TodoDetails({ todo }) {
  const { dispatch } = useContext(DataContext);
  const history = useHistory();

  return (
    <div className={todo.isComplete ? "TodoCpl" : "Todo"} key={todo.id}>
      <div>{todo.text}</div>

      <div className="icons">
        <AiOutlineClose
          onClick={() => dispatch({ type: ACTIONS.DEL_TODO, id: todo.id })}
          className="ButtonTodo"
        />

        <AiOutlineEdit
          onClick={() => {
            history.push(`/edit/${todo.id}`); //zamienić na Todo link
          }}
        />

        <AiOutlineCheck
          onClick={() => dispatch({ type: ACTIONS.CMPL_TODO, id: todo.id })}
          className="ButtonTodo"
        />
      </div>
    </div>
  );
}
