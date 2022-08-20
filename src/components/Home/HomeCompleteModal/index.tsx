import { Button, Modal } from "components/@base";
import usePlan from "hooks/usePlan";
import React, { useCallback, useEffect } from "react";
import { useFlow } from "stackflow";

function HomeCompleteModal() {
  const {
    playingTodos,
    alterCards,
    isOpenPlanComplete,
    openPlanComplete,
    closePlanComplete,
  } = usePlan();
  const { push } = useFlow();

  useEffect(() => {
    if (
      alterCards.left === undefined &&
      alterCards.right === undefined &&
      playingTodos.length === 0
    )
      openPlanComplete();
  }, [playingTodos, alterCards]);

  const onResult = useCallback(() => {
    push("ResultScreen", {});
    closePlanComplete();
  }, []);

  return (
    <Modal isOpen={isOpenPlanComplete} onClose={() => {}}>
      <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl w-[80vw] text-center">
        <h1 className="text-3xl font-primary">완료했어요!!</h1>
        <p className="text-xl">
          수고했어요! <br />
          모든 할 일을 완료했습니다
        </p>
        <Button title="결과보러가기" onClick={onResult} theme="primary" />
      </div>
    </Modal>
  );
}

export default HomeCompleteModal;
