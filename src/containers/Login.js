import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";
import loginUser from "../hooks/loginToken";

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="App">
      <h3>Najcenniejsze, co możesz zdobyć, to zdolność do:</h3>
      <h4>
        <p>-zmuszania samego siebie, żeby robić to, co należy zrobić</p>
        <p>-wtedy, gdy powinno to być zrobione</p>
        <p>-bez względu na to, czy ci się to podoba czy nie</p>
      </h4>
      <h5>Thomas Huxley</h5>
      <input
        placeholder="Login"
        className="InputLogin"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Hasło"
        className="InputLogin"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p></p>
      <Button
        className="ButtonLogin"
        title="Potwierdź"
        onClickButton={handleSubmit}
      />
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
