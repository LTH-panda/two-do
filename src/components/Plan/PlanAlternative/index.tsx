import usePlan from "hooks/usePlan";
import React, { useEffect, useState } from "react";
import { Todo } from "states/add";
import PlanAlterCard from "../PlanAlterCard";

function PlanAlternative() {
  const { plan } = usePlan();

  const [leftCard, setLeftCard] = useState<Todo | undefined>(undefined);
  const [rightCard, setRightCard] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    const yetDone = plan.todos.filter((T) => !T.isDone);

    if (!leftCard) setLeftCard(yetDone.pop());
    if (!rightCard) setRightCard(yetDone.pop());
  }, [plan, leftCard, rightCard]);

  return (
    <div className="flex flex-1 h-full gap-4 py-4 max-h-80">
      {leftCard && <PlanAlterCard id={leftCard.id} content={leftCard.title} />}
      {rightCard && (
        <PlanAlterCard id={rightCard.id} content={rightCard.title} />
      )}
    </div>
  );
}

export default PlanAlternative;
