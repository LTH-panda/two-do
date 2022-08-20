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

  const onCancel = useCallback(() => {
    closePauseModal();
  }, []);

  return (
    <Modal isOpen={isOpenPauseModal} onClose={closePauseModal}>
      <div className="flex flex-col items-center p-8 bg-white rounded-2xl w-[80vw] gap-4">
        <h1 className="text-3xl font-primary">끝내실건가요?</h1>
        <p className="text-xl text-center">
          지금 끝내면 <br />
          너무 아쉬워요..
        </p>
        <Button title="끝낼래" onClick={onPause} theme="primary" />
        <Button title="좀 더 해볼래!" onClick={onCancel} />
      </div>
    </Modal>
  );
}

export default HomePauseModal;
