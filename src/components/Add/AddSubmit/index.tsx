import { useActivity } from "@stackflow/react";
import useAdd from "hooks/useAdd";
import useTodo from "hooks/useTodo";
import React, { useCallback, useEffect, useState } from "react";
import { useFlow } from "stackflow";

function AddSubmit() {
  const { push, pop } = useFlow();
  const { name } = useActivity();
  const { due } = useAdd();
  const { todos } = useTodo();
  const [progress, setProgress] = useState<"due" | "todo">("due");
  const [isAble, setIsAble] = useState<boolean>(false);

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
      pop({ animate: false });
      pop({ animate: false });
    }
  }, [progress]);

  return (
    <button
      type="button"
      onClick={onSubmit}
      disabled={!isAble}
      className={`${
        !isAble && "!bg-gray-200 !text-gray-300"
      } flex justify-center p-8 text-2xl bg-sky-500 font-primary text-white`}
    >
      {name === "AddDueScreen" ? "할일 작성하기" : "완료"}
    </button>
  );
}

export default AddSubmit;