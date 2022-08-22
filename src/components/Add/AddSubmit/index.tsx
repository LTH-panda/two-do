import { useActivity } from "@stackflow/react";
import useAdd from "hooks/useAdd";
import useKeypad from "hooks/useKeypad";
import usePlan from "hooks/usePlan";
import React, { useCallback, useEffect, useState } from "react";
import { useFlow } from "stackflow";

function AddSubmit() {
  const { push, pop } = useFlow();
  const { name } = useActivity();
  const { due, todos } = useAdd();
  const { setPlan } = usePlan();
  const [progress, setProgress] = useState<"due" | "todo">("due");
  const [isAble, setIsAble] = useState<boolean>(false);
  const { isOpenKeypad } = useKeypad();

  useEffect(() => {
    if (name === "AddDueScreen") setProgress("due");
    if (name === "AddTodoScreen") setProgress("todo");
  }, [name]);

  useEffect(() => {
    setIsAble(false);
    if (progress === "due") {
      setIsAble(!!due);
    }
    if (progress === "todo") {
      setIsAble(!!todos.length);
    }
  }, [progress, due, todos]);

  const onSubmit = useCallback(() => {
    if (progress === "due") {
      push("AddTodoScreen", {});
    }
    if (progress === "todo") {
      setPlan({ due, todos });
      pop();
      pop({ animate: false });
    }
  }, [progress, due, todos]);

  return (
    <button
      type="button"
      onClick={onSubmit}
      disabled={!isAble}
      className={`
      ${isOpenKeypad && "hidden"}
      ${
        !isAble && "!bg-gray-200 !text-gray-300"
      } flex justify-center p-8 text-2xl bg-sky-500 font-primary text-white iosSubmit`}
    >
      {name === "AddDueScreen" ? "할일 작성하기" : "작성 완료!"}
    </button>
  );
}

export default AddSubmit;
