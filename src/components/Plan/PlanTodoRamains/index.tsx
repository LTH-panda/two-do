import usePlan from "hooks/usePlan";
import React from "react";

function PlanTodoRemains() {
  const { plan } = usePlan();

  const total = plan.todos.length;
  const remains = plan.todos.filter((T) => T.isDone).length;

  return (
    <div className="flex font-primary">
      {remains}/{total} 완료!
    </div>
  );
}

export default PlanTodoRemains;
