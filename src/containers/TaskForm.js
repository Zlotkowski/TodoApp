import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setInput(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //https://sebhastian.com/react-preventdefault/
    if (!input) {
      setError("Błąd wprowadzonych danych!!!");
      return; // jeśli wkładamy pusty string to wyjdz z funkcji
    }

    props.onSubmit({
      id: new Date().getTime(),
      text: input,
      isComplete: false,
    });

    setInput("");
    setError("");
  };

  return (
    <div className="TodoList">
      <Input
        className="InputAdd"
        title="Wpisz zadanie"
        value={input}
        inputChange={handleChange}
      />
      <Button
        className="ButtonAdd"
        title="Dodaj zadanie"
        onClickButton={handleSubmit}
      ></Button>
      {error && <p className="Error">{error}</p>}
    </div>
  );
}

export default TodoForm;
