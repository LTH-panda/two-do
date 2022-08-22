import React from "react";

type CellProps = {
  title: string;
  right?: React.ReactNode;
};

function Cell({ title, right }: CellProps) {
  return (
    <div className="flex p-8 ">
      <div className="text-xl font-primary">{title}</div>
      <span>{right}</span>
    </div>
  );
}

export default Cell;
