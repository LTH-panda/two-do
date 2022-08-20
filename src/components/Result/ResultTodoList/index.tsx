import usePlan from "hooks/usePlan";
import React from "react";
import ResultTodoCard from "../ResultTodoCard";

function ResultTodoList() {
  const { plan } = usePlan();

  return (
    <div className="flex flex-col flex-1 gap-2 p-4 bg-gray-200 rounded-2xl">
      {plan.todos.map((T) => (
        <ResultTodoCard title={T.title} isDone={T.isDone} key={T.id} />
      ))}
    </div>
  );
}

export default ResultTodoList;
