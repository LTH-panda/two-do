import useAdd from "hooks/useAdd";
import React from "react";
import AddTodoCard from "../AddTodoCard";
import AddTodoInput from "../AddTodoInput";

function AddTodoList() {
  const { todos } = useAdd();

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-200 rounded-2xl">
      <div className="flex flex-col flex-1 gap-2">
        {todos.length < 5 && <AddTodoInput />}
        <div className="flex flex-col flex-1 gap-2">
          {todos.map((T) => (
            <AddTodoCard id={T.id} title={T.title} key={T.id} />
          ))}
        </div>
      </div>
      <div className="text-center">{todos.length}/5</div>
    </div>
  );
}

export default AddTodoList;
