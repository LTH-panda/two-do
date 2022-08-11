import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { todoActionsSheet, todoTodoList } from "states/todo";

function useTodo() {
  const [todos, setTodos] = useRecoilState(todoTodoList);

  // todoActionsBottomSheet
  const [isOpenActions, setIsOpenActions] = useRecoilState(todoActionsSheet);
  const openActions = useCallback(() => setIsOpenActions(true), []);
  const closeActions = useCallback(() => setIsOpenActions(false), []);

  return { todos, isOpenActions, setTodos, openActions, closeActions };
}

export default useTodo;
