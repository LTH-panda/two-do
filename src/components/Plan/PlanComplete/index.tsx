import usePlan from "hooks/usePlan";
import React from "react";

function PlanComplete() {
  const {
    plan,
    selectedTodo,
    isOpenComplete,
    setPlan,
    doneAlterCard,
    resetSelectedTodo,
  } = usePlan();

  const onComplete = () => {
    const editPlan = plan.todos.map((T) =>
      T.id === selectedTodo.id ? { ...T, isDone: true } : T
    );
    setPlan({ ...plan, todos: editPlan });
    doneAlterCard(selectedTodo.direction);
    resetSelectedTodo();
  };

  if (!isOpenComplete) return null;

  return (
    <button
      type="button"
      onClick={onComplete}
      className="w-full !p-6 text-white btn bg-sky-500 animate-scaleUp"
    >
      완료했어!
    </button>
  );
}

export default PlanComplete;
