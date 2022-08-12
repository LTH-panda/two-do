import useWrite from "hooks/useWrite";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function PlanWriteNav() {
  const { title, time } = useWrite();
  const { replace } = useFlow();

  const onSubmit = useCallback(() => {
    if (title && time) replace("PlanScreen", { title });
  }, [title, time]);

  return (
    <button
      type="button"
      onClick={onSubmit}
      className={`${
        title && time && "bg-sky-500 !text-white"
      } p-8 bg-white border-t-2 text-2xl text-gray-300`}
    >
      완료
    </button>
  );
}

export default PlanWriteNav;
