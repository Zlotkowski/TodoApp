import "./App.css";
import React from "react";
import Button from "./components/Button";
import TodoForm from "./containers/TodoForm";
import TodoList from "./containers/TodoList";
import Login from "./containers/Login";
import useToken from "./hooks/useToken";

export default function App() {
  const { token, setToken } = useToken();

  const handleLogout = () => {
    setToken("");
    sessionStorage.clear();
  };

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Button
        className="ButtonLogin"
        title="Wyloguj"
        onClickButton={handleLogout}
      />
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}
