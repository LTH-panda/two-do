import { TextField } from "components/@base";
import useWrite from "hooks/useWrite";
import React from "react";

function TodoInput() {
  const { write, changeWrite, resetWrite } = useWrite();

  return (
    <TextField
      placeholder="할 일을 입력하세요"
      name="write"
      value={write}
      onChange={changeWrite}
      onReset={resetWrite}
    />
  );
}

export default TodoInput;
