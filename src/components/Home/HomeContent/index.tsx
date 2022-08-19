import { PlanAlternative, PlanDue, PlanTodoRemains } from "components/Plan";
import { TodoList } from "components/Todo";
import usePlan from "hooks/usePlan";
import React from "react";

function HomeContent() {
  const { plan, isPlayPlan } = usePlan();

  if (isPlayPlan)
    return (
      <div className="flex flex-col flex-1 gap-2">
        <section className="flex items-center gap-12 justify-evenly">
          <PlanDue />
          <PlanTodoRemains />
        </section>
        <section className="flex items-center justify-center flex-1">
          <PlanAlternative />
        </section>
      </div>
    );

  if (plan)
    return (
      <div className="flex flex-col flex-1 gap-2">
        {plan && (
          <>
            <PlanDue />
            <TodoList />
          </>
        )}
      </div>
    );

  return (
    <div className="flex items-center justify-center flex-1">
      <h1 className="text-3xl font-primary">시작하세요</h1>
    </div>
  );
}

export default HomeContent;
