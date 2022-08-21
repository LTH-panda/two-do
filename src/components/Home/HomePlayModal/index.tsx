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
    resetAlterCards,
  } = usePlan();

  const onConfirm = useCallback(() => {
    const randomTodos = plan.todos.slice().sort(() => Math.random() - 0.5);
    initPlayingTodos(randomTodos);
    resetCountDownTime();
    resetAlterCards();
    playPlan();
    closePlayModal();
  }, [plan]);

  const onCancel = useCallback(() => {
    closePlayModal();
  }, []);

  return (
    <Modal isOpen={isOpenPlayModal} onClose={closePlayModal}>
      <div className="flex flex-col p-8 bg-white rounded-2xl w-[80vw] gap-4 text-center">
        <h1 className="text-3xl font-primary">준비됐나요?</h1>
        <p className="text-xl">
          두 개씩 할일을 보여드릴게요 <br />
          하나씩 완료해보세요!
        </p>
        <Button title="시작할게!" onClick={onConfirm} theme="primary" />
        <Button title="잠시만..." onClick={onCancel} />
      </div>
    </Modal>
  );
}

export default HomePlayModal;
