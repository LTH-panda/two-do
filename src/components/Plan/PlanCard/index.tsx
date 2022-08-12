import React, { useCallback } from "react";
import { useFlow } from "stackflow";

type PlanCardProps = {
  title: string;
  date: string;
};

function PlanCard({ title, date }: PlanCardProps) {
  const { push } = useFlow();

  const onCard = useCallback(() => push("PlanScreen", {}), []);

  return (
    <div
      onClick={onCard}
      className="p-8 rounded-2xl shadow-md bg-white isHover cursor-pointer"
    >
      <h1>{title}</h1>
      <div>{date}</div>
    </div>
  );
}

export default PlanCard;
