import usePlan from "hooks/usePlan";
import React from "react";
import formatTime from "utils/formatTime";

function ResultProperties() {
  const { plan } = usePlan();

  return (
    <div className="text-2xl text-center font-primary text-sky-500">
      {formatTime(plan.due)}안에 완료
    </div>
  );
}

export default ResultProperties;
