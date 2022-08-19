import usePlan from "hooks/usePlan";
import React from "react";
import formatTime from "utils/formatTime";

function PlanDue() {
  const { plan } = usePlan();

  return (
    <div className="text-xl text-center text-sky-500 font-primary">
      {formatTime(plan.due)}안에 끝내기
    </div>
  );
}

export default PlanDue;
