import { BottomSheet } from "components/@base";
import useTodo from "hooks/useTodo";
import React from "react";

function TodoActions() {
  const { isOpenActions, closeActions } = useTodo();
  return (
    <BottomSheet isOpen={isOpenActions} onClose={closeActions}>
      <div className="bg-white p-8 pb-20 rounded-t-md">test</div>
    </BottomSheet>
  );
}

export default TodoActions;
