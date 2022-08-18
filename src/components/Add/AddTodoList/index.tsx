import { TodoCard } from "components/Todo";
import useTodo from "hooks/useTodo";
import React from "react";
import AddTodoInput from "../AddTodoInput";

function AddTodoList() {
  const { todos } = useTodo();

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-200 rounded-2xl">
      <div className="flex flex-col flex-1 gap-2">
        {todos.length < 5 && <AddTodoInput />}
        {todos.map((T) => (
          <TodoCard id={T.id} title={T.title} key={T.id} />
        ))}
      </div>
      <div className="text-center">{todos.length}/5</div>
    </div>
  );
}

export default AddTodoList;
