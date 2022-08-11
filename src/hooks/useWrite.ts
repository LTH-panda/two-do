import { ChangeEvent, useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { writeTodo } from "states/write";

function useWrite() {
  const [write, setWrite] = useRecoilState(writeTodo);
  const changeWrite = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setWrite(e.target.value),
    [write]
  );
  const resetWrite = useResetRecoilState(writeTodo);

  return { write, changeWrite, resetWrite };
}

export default useWrite;
