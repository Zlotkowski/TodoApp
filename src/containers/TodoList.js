import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import TodoDetails from "./TodoDetails";

export default function TodoList() {
  const { todos } = useContext(DataContext);

  return todos.length ? (
    <div className="TodoList">
      <h2>Do zrobienia jeszcze...</h2>
      {todos
        .filter((todo) => todo.isComplete === false)
        .map((todo) => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
      <h2>O tych zadaniach możesz zapomnieć :)</h2>

      {todos
        .filter((todo) => todo.isComplete === true)
        .map((todo) => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
    </div>
  ) : (
    <div>No todos to read. Hello free time</div>
  );
}
