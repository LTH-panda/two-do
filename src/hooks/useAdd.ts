import { ChangeEvent, useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { addDue, addTodoInput, addTodos, Todo } from "states/add";
import { v4 } from "uuid";

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

  // todos
  const [todos, setTodos] = useRecoilState(addTodos);
  const addTodo = useCallback(
    (todo: string) => {
      const newTodo: Todo = { id: v4(), title: todo, isDone: false };
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
  const resetTodo = useResetRecoilState(addTodos);

  return {
    due,
    todoInput,
    todos,
    setDue,
    resetDue,
    changeTodoInput,
    resetTodoInput,
    addTodo,
    removeTodo,
    resetTodo,
  };
}

export default useAdd;
