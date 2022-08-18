import { SvgIcon } from "components/@base";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function PlanActions() {
  const { push } = useFlow();

  const onStart = useCallback(() => push("AddDueScreen", {}), []);

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onStart}
        className="flex p-6 isHover rounded-2xl bg-sky-500"
      >
        <SvgIcon name="scales" size={40} />
      </button>
    </div>
  );
}

export default PlanActions;
