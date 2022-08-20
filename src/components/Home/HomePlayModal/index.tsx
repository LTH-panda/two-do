import { Button, Modal } from "components/@base";
import usePlan from "hooks/usePlan";
import React, { useCallback } from "react";

function HomePlayModal() {
  const {
    plan,
    isOpenPlayModal,
    closePlayModal,
    initPlayingTodos,
    playPlan,
    resetCountDownTime,
  } = usePlan();

  const onConfirm = useCallback(() => {
    const randomTodos = plan.todos.slice().sort(() => Math.random() - 0.5);
    initPlayingTodos(randomTodos);
    resetCountDownTime();
    playPlan();
    closePlayModal();
  }, [plan]);

  return (
    <Modal isOpen={isOpenPlayModal} onClose={closePlayModal}>
      <div className="flex flex-col items-center p-8 bg-white rounded-2xl w-[80vw] gap-4">
        <h1 className="text-2xl font-primary">준비됐나요?</h1>
        <Button title="시작할게요" onClick={onConfirm} theme="primary" />
      </div>
    </Modal>
  );
}

export default HomePlayModal;
