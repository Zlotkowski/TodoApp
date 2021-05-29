import "./App.css";
import Button from "./components/Button";
import { Redirect, useHistory } from "react-router-dom";
import DataProvider from "./hooks/DataContext";
import TodoForm from "./containers/TodoForm";
import TodoList from "./containers/TodoList";

export default function App({ authorized }) {
  const history = useHistory();

  if (!authorized) {
    return (
      <>
        <Redirect to="/login" />
      </>
    );
  }
  return (
    <div className="App">
      <Button
        className="ButtonLogin"
        title="Wyloguj"
        onClickButton={() => {
          history.push("/login");
        }}
      />
      <div>
        <DataProvider>
          <TodoForm />
          <TodoList />
        </DataProvider>
      </div>
    </div>
  );
}
