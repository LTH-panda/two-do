import {
  PlanAlternative,
  PlanDue,
  PlanTimer,
  PlanTodoRemains,
} from "components/Plan";
import { TodoList } from "components/Todo";
import usePlan from "hooks/usePlan";
import React from "react";
import getStartMessage from "utils/getStartMessage";

function HomeContent() {
  const { plan, isPlayPlan } = usePlan();

  if (isPlayPlan)
    return (
      <div className="flex flex-col flex-1 gap-2">
        <section className="flex items-center gap-12 justify-evenly">
          <PlanTimer />
          <PlanTodoRemains />
        </section>
        <section className="flex items-center justify-center flex-1">
          <PlanAlternative />
        </section>
      </div>
    );

  if (plan.due)
    return (
      <div className="flex flex-col justify-center flex-1 gap-4">
        <PlanDue />
        <TodoList />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      <div className="flex flex-col items-center justify-center flex-1 gap-2 text-4xl font-primary">
        <h1>시작해보세요</h1>
        <div className="text-xl text-gray-400">'{getStartMessage()}'</div>
      </div>
    </div>
  );
}

export default HomeContent;
