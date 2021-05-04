import React, { useState, useEffect, useMemo } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import { AiOutlineReload } from "react-icons/ai";

function TaskList() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useLocalStorage("Local todo data", []);
  // const [todosApi, setTodosApi] = useState();

  const url = "https://jsonplaceholder.typicode.com/users/1/todos";

  const todosApi = useFetch(url);

  const modifiedApiData = () => {
    let modifiedData = todosApi.map((todo) => {
      return {
        id: todo.id,
        text: todo.title,
        isComplete: todo.completed,
      };
    });
    setTodos([...todos, ...modifiedData]);
  };

  useEffect(() => {
    if (todos.length > 0) {
      return;
    } else {
      modifiedApiData();
    }
  }, [todos]);

  const reloadData = () => {
    setTodos([]);
  };

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoList">
      <div className="Mess">
        <h3>Najcenniejsze, co możesz zdobyć, to zdolność do:</h3>
        <h4>
          <p>-zmuszania samego siebie, żeby robić to, co należy zrobić</p>
          <p>-wtedy, gdy powinno to być zrobione</p>
          <p>-bez względu na to, czy ci się to podoba czy nie</p>
        </h4>
        <h5>Thomas Huxley</h5>
      </div>

      <AiOutlineReload
        onClick={reloadData}
        className="Message"
      ></AiOutlineReload>
      <TaskForm onSubmit={addTodo} />
      <Task
        todos={todos}
        setTodos={setTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TaskList;
