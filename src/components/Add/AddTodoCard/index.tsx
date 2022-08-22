import { SvgIcon } from "components/@base";
import useAdd from "hooks/useAdd";
import React, { useEffect, useRef } from "react";

type AddTodoCardProps = {
  id: string;
  title: string;
};

function AddTodoCard({ id, title }: AddTodoCardProps) {
  const { removeTodo } = useAdd();
  const cardRef = useRef<HTMLDivElement>(null);

  const onRemove = () => removeTodo(id);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      className="flex items-center py-2 pl-4 pr-3 bg-white rounded-md shadow-md animate-scaleUp"
    >
      <h1 className="flex-1 break-all">{title}</h1>
      <button type="button" onClick={onRemove} className="p-1">
        <SvgIcon name="minus" size={25} />
      </button>
    </div>
  );
}

export default AddTodoCard;
