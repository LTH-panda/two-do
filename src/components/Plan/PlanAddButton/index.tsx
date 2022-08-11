import { SvgIcon } from "components/@base";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function PlanAddButton() {
  const { push } = useFlow();

  const onAdd = useCallback(() => push("AddPlanScreen", {}), []);

  return (
    <button
      type="button"
      onClick={onAdd}
      className="rounded-full p-4 bg-white shadow-md isHover"
    >
      <SvgIcon name="plus" />
    </button>
  );
}

export default PlanAddButton;
