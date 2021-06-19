import React, {
  useReducer,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import DataReducer from "./DataReducer";
import { ACTIONS } from "./DataReducer";
import { Observable } from "rxjs";

function useFetch(url) {
  const [externalData, setExternalData] = useState([]);

  useEffect(() => {
    const dataObservable = new Observable((observer) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        });
    }).subscribe((data) => {
      setExternalData(data);
    });

    return () => {
      dataObservable.unsubscribe();
    };
  }, [url]);
  return externalData;
}

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const externalData = useFetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );

  const modifiedData = useMemo(() => {
    let data = externalData.map((todo) => {
      return {
        id: todo.id,
        text: todo.title,
        isComplete: todo.completed,
      };
    });
    return data;
  }, [externalData]);

  const [todos, dispatch] = useReducer(DataReducer, [], () => {
    const localData = localStorage.getItem("Todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    dispatch({
      type: ACTIONS.JOIN_EXTERNAL_DATA,
      fetchedData: modifiedData,
    });
  }, [dispatch, modifiedData]);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <DataContext.Provider value={{ todos, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
