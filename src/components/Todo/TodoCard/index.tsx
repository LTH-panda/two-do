import { SvgIcon } from "components/@base";
import useAdd from "hooks/useAdd";
import React from "react";

type TodoCardProps = {
  id: string;
  title: string;
  isEdit?: boolean;
};

function TodoCard({ id, title, isEdit = false }: TodoCardProps) {
  const { removeTodo } = useAdd();

  const onRemove = () => removeTodo(id);

  return (
    <div className="flex items-center py-2 pl-4 pr-3 bg-white rounded-md shadow-md animate-scaleUp">
      <h1 className="flex-1 break-all">{title}</h1>
      {isEdit && (
        <button type="button" onClick={onRemove} className="p-1">
          <SvgIcon name="minus" size={25} />
        </button>
      )}
    </div>
  );
}

export default TodoCard;
