import { ErrorMessage } from "components/@modules";
import useTodo from "hooks/useTodo";
import React from "react";
import TodoCard from "../TodoCard";

function TodoList() {
  const { todos } = useTodo();

  if (!todos) return <ErrorMessage message="two do" />;

  return (
    <div className="flex flex-col flex-1 gap-4">
      {/* {todos.map((T) => (
        <TodoCard key={T.id} />
      ))} */}
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
}

export default TodoList;
