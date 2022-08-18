import useAdd from "hooks/useAdd";
import React from "react";
import formatTime from "utils/formatTime";

function AddDue() {
  const { due } = useAdd();

  return (
    <div className="text-center  text-sky-500 font-primary">
      {formatTime(due)}안에 끝내기
    </div>
  );
}

export default AddDue;
