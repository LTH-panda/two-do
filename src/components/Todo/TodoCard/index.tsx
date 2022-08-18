import { SvgIcon } from "components/@base";
import useTodo from "hooks/useTodo";
import React from "react";

type TodoCardProps = {
  id: string;
  title: string;
};

function TodoCard({ id, title }: TodoCardProps) {
  const { removeTodo } = useTodo();

  const onRemove = () => removeTodo(id);

  return (
    <div className="flex items-center py-2 pl-4 pr-3 bg-white rounded-md shadow-md animate-scaleUp">
      <h1 className="flex-1 break-all">{title}</h1>
      <button type="button" onClick={onRemove} className="p-1">
        <SvgIcon name="trash" size={25} />
      </button>
    </div>
  );
}

export default TodoCard;
