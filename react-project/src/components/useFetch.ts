import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../ReduxStore/store";
import { Todo } from "../interface/interface";

export const useFetch = (id: string) => {
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  const todos = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    const todoItem = todos.find((item) => item.id === id);
    setTodo(todoItem);
  }, [id, todos]);

  return { todo };
};
