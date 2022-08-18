import { ErrorMessage } from "components/@modules";
import useTodo from "hooks/useTodo";
import React from "react";

function TodoList() {
  const { todos } = useTodo();

  if (!todos) return <ErrorMessage message="two do" />;

  return <div className="flex flex-col flex-1 gap-4" />;
}

export default TodoList;
