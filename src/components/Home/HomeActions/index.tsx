import { SvgIcon } from "components/@base";
import { PlanComplete } from "components/Plan";
import usePlan from "hooks/usePlan";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function HomeActions() {
  const { push } = useFlow();
  const { plan, isPlayPlan, isOpenComplete, openPlayModal, openPauseModal } =
    usePlan();

  const onPause = useCallback(() => {
    openPauseModal();
  }, []);

  const onEdit = useCallback(() => push("AddDueScreen", { isEdit: true }), []);

  const onPlay = useCallback(() => {
    openPlayModal();
  }, []);

  const onStart = useCallback(() => push("AddDueScreen", {}), []);

  if (isPlayPlan)
    return (
      <div className="flex items-center justify-center h-24">
        {isOpenComplete ? (
          <PlanComplete />
        ) : (
          <button
            type="button"
            onClick={onPause}
            className="flex p-6 bg-rose-500 isActive rounded-2xl"
          >
            <SvgIcon name="stop" color="#fff" />
          </button>
        )}
      </div>
    );

  if (plan.due)
    return (
      <div className="flex justify-center gap-8">
        <button
          type="button"
          onClick={onEdit}
          className="flex p-6 bg-gray-200 isActive rounded-2xl"
        >
          <SvgIcon name="pencil" />
        </button>
        <button
          type="button"
          onClick={onPlay}
          className="flex p-6 isActive rounded-2xl bg-sky-500"
        >
          <SvgIcon name="play" />
        </button>
      </div>
    );

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onStart}
        className="flex p-6 isActive rounded-2xl bg-sky-500"
      >
        <SvgIcon name="scales" size={40} />
      </button>
    </div>
  );
}

export default HomeActions;
