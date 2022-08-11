import { ErrorMessage } from "components/@modules";
import React from "react";
import PlanCard from "../PlanCard";

function PlanList() {
  const plans = [
    {
      title: "test",
      date: "date",
    },
    {
      title: "test",
      date: "date",
    },
    {
      title: "test",
      date: "date",
    },
  ];

  if (!plans) return <ErrorMessage message="two do" />;

  return (
    <div className="flex flex-col gap-4">
      {plans.map((P) => (
        <PlanCard title={P.title} date={P.date} />
      ))}
    </div>
  );
}

export default PlanList;
