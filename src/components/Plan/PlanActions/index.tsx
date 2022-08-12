import { SvgIcon } from "components/@base";
import useTodo from "hooks/useTodo";
import React from "react";

function PlanActions() {
  const { openAdd } = useTodo();

  return (
    <div className="flex items-center justify-center gap-12">
      <button
        type="button"
        onClick={openAdd}
        className="p-4 bg-white shadow-md rounded-2xl isHover"
      >
        <SvgIcon name="plus" size={50} />
      </button>
      <button
        type="button"
        className="p-4 shadow-md bg-sky-500 rounded-2xl isHover"
      >
        <SvgIcon name="play" size={50} />
      </button>
    </div>
  );
}

export default PlanActions;
