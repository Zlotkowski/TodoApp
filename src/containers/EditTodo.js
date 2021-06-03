import React, { useContext, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { ACTIONS } from "../hooks/DataReducer";
import Input from "../components/Input";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditTodo() {
  const history = useHistory();
  const { id } = useParams();
  const { todos } = useContext(DataContext);
  const { dispatch } = useContext(DataContext);
  const taskTitle = todos.find((todo) => todo.id === parseInt(id));

  const [editingTitle, setEditingTitle] = useState(taskTitle.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.UPDATE_TODO,
      id: parseInt(id),
      todo: { editingTitle },
    });
    setEditingTitle("");
    history.push("/todo");
  };

  return (
    <div className="App">
      <h2>Znajdujesz sie w trybie edycji</h2>
      <h3>Aby powrócić do listy zadań, potwierdź zmiany</h3>
      <div className="TodoList">
        <Input
          className="InputAdd"
          title="Edytuj zadanie"
          value={editingTitle}
          inputChange={setEditingTitle}
        />
        <Button
          className="ButtonAdd"
          title="Potwierdź"
          onClickButton={handleUpdate}
        />
      </div>
      <h2>Id zadania: {id}</h2>
      <h2>Treść zadania: {taskTitle.text}</h2>
    </div>
  );
}
