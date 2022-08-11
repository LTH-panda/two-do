import useWrite from "hooks/useWrite";
import React, { useCallback } from "react";
import { Time } from "states/write";

function PlanWriteTime() {
  const { time, setTime } = useWrite();
  const onTime = useCallback((t: Time) => setTime(t), [time]);
  const buttons: { title: string; time: Time }[] = [
    {
      title: "10분",
      time: 10,
    },
    {
      title: "30분",
      time: 30,
    },
    {
      title: "1시간",
      time: 60,
    },
    {
      title: "오늘",
      time: 1440,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">시간</h1>
      {buttons.map((B) => (
        <button
          type="button"
          onClick={() => onTime(B.time)}
          className={`${
            B.time === time && "!bg-sky-500 text-white"
          } btn duration-150`}
          key={B.time}
        >
          {B.title}
        </button>
      ))}
    </div>
  );
}

export default PlanWriteTime;
