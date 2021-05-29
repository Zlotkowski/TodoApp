import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const history = useHistory();
  return (
    <div className="App">
      <h3>Najcenniejsze, co możesz zdobyć, to zdolność do:</h3>
      <h4>
        <p>-zmuszania samego siebie, żeby robić to, co należy zrobić</p>
        <p>-wtedy, gdy powinno to być zrobione</p>
        <p>-bez względu na to, czy ci się to podoba czy nie</p>
      </h4>
      <h5>Thomas Huxley</h5>
      <Input className="InputLogin" title="Nazwa użytkownika" />
      <Input className="InputLogin" title="Hasło użytkownika" />
      <p></p>
      <Button
        className="ButtonLogin"
        title="Potwierdź"
        onClickButton={() => {
          history.push("/todo");
        }}
      />
    </div>
  );
}
