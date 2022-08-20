import { SvgIcon } from "components/@base";
import React from "react";

type ResultTodoCardProps = {
  title?: string;
  isDone: boolean;
};

function ResultTodoCard({ title = "test", isDone }: ResultTodoCardProps) {
  return (
    <div
      className={`${
        isDone ? "bg-white" : "bg-white opacity-50"
      } flex items-center py-2 pl-4 pr-3 rounded-md shadow-md animate-scaleUp`}
    >
      <h1 className={`${!isDone && "text-rose-600"} flex-1 break-all`}>
        {title}
      </h1>
      {isDone ? (
        <SvgIcon name="check" color="#0ea5e9" size={35} />
      ) : (
        <SvgIcon name="xSquare" color="#f43f5e" size={35} />
      )}
    </div>
  );
}

export default ResultTodoCard;
