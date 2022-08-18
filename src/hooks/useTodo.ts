import { useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  Todo,
  todoActionsSelected,
  todoActionsSheet,
  todoAddSheet,
  todoTab,
  todoTodoList,
} from "states/todo";
import { v4 } from "uuid";

function useTodo() {
  const [todos, setTodos] = useRecoilState(todoTodoList);
  const initTodos = useCallback((list: Todo[]) => setTodos(list), []);
  const addTodo = useCallback(
    (todo: string) => {
      const newTodo: Todo = { id: v4(), title: todo };
      setTodos([...todos, newTodo]);
    },
    [todos]
  );
  const removeTodo = useCallback(
    (id: string) => {
      setTodos(todos.filter((T) => T.id !== id));
    },
    [todos]
  );
  const resetTodo = useResetRecoilState(todoTodoList);

  // todoActionsBottomSheet
  const [isOpenActions, setIsActions] = useRecoilState(todoActionsSheet);
  const openActions = useCallback(() => setIsActions(true), []);
  const closeActions = useCallback(() => setIsActions(false), []);
  // todoActionsSelected
  const [selectedTodo, setSelectedTodo] = useRecoilState(todoActionsSelected);

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
    selectedTodo,
    tab,
    initTodos,
    addTodo,
    removeTodo,
    resetTodo,
    openAdd,
    closeAdd,
    openActions,
    closeActions,
    setSelectedTodo,
    setTab,
  };
}

export default useTodo;
