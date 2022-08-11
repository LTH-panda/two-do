import { TextField } from "components/@base";
import useWrite from "hooks/useWrite";
import React from "react";

function PlanWriteTitle() {
  const { title, changeTitle, resetTitle } = useWrite();

  return (
    <TextField
      placeholder="플랜의 이름을 입력하세요"
      name="title"
      value={title}
      onChange={changeTitle}
      onReset={resetTitle}
    />
  );
}

export default PlanWriteTitle;
