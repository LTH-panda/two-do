import usePlan from "hooks/usePlan";
import React, { useEffect } from "react";

type PlanAlterCardProps = {
  id: string;
  content: string;
  direction: "left" | "right";
};

function PlanAlterCard({ id, content, direction }: PlanAlterCardProps) {
  const {
    selectedTodo,
    setSelectedTodo,
    // resetSelectedTodo,
    openComplete,
    closeComplete,
  } = usePlan();

  useEffect(() => {
    if (selectedTodo.id) openComplete();
    else closeComplete();
  }, [selectedTodo]);

  const onCard = () => {
    setSelectedTodo({ direction, id });
    // else resetSelectedTodo();
  };

  return (
    <button
      type="button"
      onClick={onCard}
      className={`${
        selectedTodo.id === id && "scale-110 shadow-lg ring ring-sky-500"
      } flex flex-1 justify-center items-center p-8 max-w-[50%] bg-white shadow-md rounded-2xl isActive`}
    >
      {content}
    </button>
  );
}

export default PlanAlterCard;
