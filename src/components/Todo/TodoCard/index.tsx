import { SvgIcon } from "components/@base";
import useTodo from "hooks/useTodo";
import React from "react";

type TodoCardProps = {
  todo?: string;
};

function TodoCard({ todo = "tes" }: TodoCardProps) {
  const { openActions } = useTodo();

  return (
    <div
      onClick={openActions}
      className="rounded-md shadow-md p-4 bg-white flex items-center cursor-pointer"
    >
      <h1 className="flex-1">{todo}</h1>
      <button type="button" onClick={openActions}>
        <SvgIcon name="dotsHorizontal" />
      </button>
    </div>
  );
}

export default TodoCard;
