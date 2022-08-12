import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  todoActionsSheet,
  todoAddSheet,
  todoTab,
  todoTodoList,
} from "states/todo";

function useTodo() {
  const [todos, setTodos] = useRecoilState(todoTodoList);

  // todoActionsBottomSheet
  const [isOpenActions, setIsActions] = useRecoilState(todoActionsSheet);
  const openActions = useCallback(() => setIsActions(true), []);
  const closeActions = useCallback(() => setIsActions(false), []);

  // todo add bot sheet
  const [isOpenAdd, setIsOpenAdd] = useRecoilState(todoAddSheet);
  const openAdd = useCallback(() => setIsOpenAdd(true), []);
  const closeAdd = useCallback(() => setIsOpenAdd(false), []);

  // todoTab
  const [tab, setTab] = useRecoilState(todoTab);

  return {
    todos,
    isOpenAdd,
    isOpenActions,
    tab,
    setTodos,
    openAdd,
    closeAdd,
    openActions,
    closeActions,
    setTab,
  };
}

export default useTodo;
