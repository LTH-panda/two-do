import usePlan from "hooks/usePlan";
import React, { useCallback, useEffect } from "react";

type PlanAlterCardProps = {
  id: string;
  content: string;
};

function PlanAlterCard({ id, content }: PlanAlterCardProps) {
  const { selectedTodo, setSelectedTodo, openComplete, closeComplete } =
    usePlan();

  useEffect(() => {
    if (selectedTodo) openComplete();
    else closeComplete();
  }, [selectedTodo]);

  const onCard = useCallback(() => {
    if (selectedTodo !== id) setSelectedTodo(id);
    else setSelectedTodo(undefined);
  }, [selectedTodo]);

  return (
    <button
      type="button"
      onClick={onCard}
      className={`${
        selectedTodo === id && "scale-105 shadow-lg ring ring-sky-500"
      } flex flex-1 justify-center items-center p-8 bg-white shadow-md rounded-2xl isActive`}
    >
      {content}
    </button>
  );
}

export default PlanAlterCard;
