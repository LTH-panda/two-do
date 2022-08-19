import usePlan from "hooks/usePlan";
import React, { useCallback } from "react";

function PlanComplete() {
  const { isOpenComplete } = usePlan();

  const onComplete = useCallback(() => {}, []);

  if (!isOpenComplete) return null;

  return (
    <button
      type="button"
      onClick={onComplete}
      className="w-full !p-6 text-white btn bg-sky-500 animate-scaleUp"
    >
      완료했어요!
    </button>
  );
}

export default PlanComplete;
