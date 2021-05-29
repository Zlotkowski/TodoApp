import React, { useContext, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { ACTIONS } from "../hooks/DataReducer";
import Button from "../components/Button";
import Input from "../components/Input";

export default function TodoForm() {
  const { dispatch } = useContext(DataContext);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, todo: { title } });
    setTitle("");
  };

  return (
    <div>
      <div className="TodoList">
        <Input
          className="InputAdd"
          title="Wpisz zadanie"
          value={title}
          inputChange={handleChange}
        />
        <Button
          className="ButtonAdd"
          title="Dodaj zadanie"
          onClickButton={handleSubmit}
        ></Button>
      </div>
    </div>
  );
}
