import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import TodoDetails from "./TodoDetails";

export default function TodoList() {
  const { todos } = useContext(DataContext);

  return todos.length ? (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoDetails todo={todo} key={todo.id} />;
      })}
    </div>
  ) : (
    <div>No todos to read. Hello free time</div>
  );
}
