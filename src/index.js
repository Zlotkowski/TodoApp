import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EditTodo from "./containers/EditTodo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DataProvider from "./hooks/DataContext";

function Wrapper() {
  return (
    <>
      <Switch>
        <Route path="/todo">
          <App />
        </Route>
        <Route path="/edit/:id">
          <EditTodo />
        </Route>
      </Switch>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Wrapper />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
