import React, { useReducer, createContext, useEffect } from "react";
import DataReducer from "./DataReducer";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [todos, dispatch] = useReducer(DataReducer, [], () => {
    const localData = localStorage.getItem("Todos");
    return localData ? JSON.parse(localData) : [];
  }); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <DataContext.Provider value={{ todos, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
