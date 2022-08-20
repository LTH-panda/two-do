import { Button, Modal } from "components/@base";
import usePlan from "hooks/usePlan";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function HomePauseModal() {
  const { isOpenPauseModal, closePauseModal } = usePlan();
  const { push } = useFlow();

  const onPause = useCallback(() => {
    push("ResultScreen", { isPause: true });
    closePauseModal();
  }, []);

  return (
    <Modal isOpen={isOpenPauseModal} onClose={closePauseModal}>
      <div className="flex flex-col items-center p-8 bg-white rounded-2xl w-[80vw] gap-4">
        <h1 className="text-2xl font-primary">끝내실건가요?</h1>
        <p className="text-xl text-center">
          지금 끝내시면 <br />
          목표가 전부 사라져요!
        </p>
        <Button title="끝낼래" onClick={onPause} theme="primary" />
      </div>
    </Modal>
  );
}

export default HomePauseModal;
