import { ChangeEvent, useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { writeTime, writeTitle } from "states/write";

function useWrite() {
  // title
  const [title, setTitle] = useRecoilState(writeTitle);
  const changeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    [title]
  );
  const resetTitle = useResetRecoilState(writeTitle);
  // time
  const [time, setTime] = useRecoilState(writeTime);
  const resetTime = useResetRecoilState(writeTime);

  return { title, time, changeTitle, resetTitle, setTime, resetTime };
}

export default useWrite;
