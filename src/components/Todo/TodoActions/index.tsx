import { BottomSheet } from "components/@base";
import useTodo from "hooks/useTodo";
import React from "react";

function TodoActions() {
  const { isOpenActions, closeActions } = useTodo();
  return (
    <BottomSheet isOpen={isOpenActions} onClose={closeActions}>
      <div>test</div>
    </BottomSheet>
  );
}

export default TodoActions;
