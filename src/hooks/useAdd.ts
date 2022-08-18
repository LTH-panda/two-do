import { ChangeEvent, useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { addDue, addTodoInput } from "states/add";

function useAdd() {
  // select due
  const [due, setDue] = useRecoilState(addDue);
  const resetDue = useResetRecoilState(addDue);

  // todo input
  const [todoInput, setTodoInput] = useRecoilState(addTodoInput);
  const changeTodoInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTodoInput(e.target.value),
    [todoInput]
  );
  const resetTodoInput = useResetRecoilState(addTodoInput);

  return {
    due,
    todoInput,
    setDue,
    resetDue,
    changeTodoInput,
    resetTodoInput,
  };
}

export default useAdd;
