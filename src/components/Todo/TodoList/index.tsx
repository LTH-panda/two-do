import usePlan from "hooks/usePlan";
import React from "react";
import TodoCard from "../TodoCard";

function TodoList() {
  const { plan } = usePlan();

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-200 rounded-2xl">
      {plan.todos.map((T) => (
        <TodoCard id={T.id} title={T.title} key={T.id} />
      ))}
    </div>
  );
}

export default TodoList;
