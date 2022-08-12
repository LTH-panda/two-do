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
      className="flex items-center px-8 py-6 bg-white shadow-md cursor-pointer rounded-2xl"
    >
      <h1 className="flex-1">{todo}</h1>
      <button type="button" onClick={openActions}>
        <SvgIcon name="dotsHorizontal" />
      </button>
    </div>
  );
}

export default TodoCard;
