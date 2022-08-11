import React from "react";

type PlanCardProps = {
  title: string;
  date: string;
};

function PlanCard({ title, date }: PlanCardProps) {
  return (
    <div className="p-8 rounded-2xl shadow-md bg-white">
      <h1>{title}</h1>
      <div>{date}</div>
    </div>
  );
}

export default PlanCard;
