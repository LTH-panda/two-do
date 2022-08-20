import { SvgIcon } from "components/@base";
import useAdd from "hooks/useAdd";
import React, { useCallback } from "react";

function AddTodoInput() {
  const { todoInput, changeTodoInput, resetTodoInput, addTodo } = useAdd();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (todoInput) {
        addTodo(todoInput);
        resetTodoInput();
      }
    },
    [todoInput]
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center h-12 py-2 pl-4 pr-3 bg-white border-b-2 border-sky-500 rounded-t-md"
    >
      <input
        placeholder="할 일을 입력하세요"
        name="todoInput"
        value={todoInput}
        onChange={changeTodoInput}
        autoComplete="off"
        className="flex-1 outline-none"
      />
      {todoInput && (
        <button type="submit" className="p-1">
          <SvgIcon name="plus" size={25} />
        </button>
      )}
    </form>
  );
}

export default AddTodoInput;
