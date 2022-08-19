import { Modal } from "components/@base";
import usePlan from "hooks/usePlan";
import React from "react";

function HomePauseModal() {
  const { isOpenPauseModal, closePauseModal } = usePlan();

  return (
    <Modal isOpen={isOpenPauseModal} onClose={closePauseModal}>
      <div className="flex flex-col items-center p-8 bg-white rounded-2xl w-[80vw] gap-4">
        <h1 className="text-2xl font-primary">끝내실건가요?</h1>
      </div>
    </Modal>
  );
}

export default HomePauseModal;
