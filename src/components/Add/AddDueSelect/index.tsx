import useAdd from "hooks/useAdd";
import React, { useCallback } from "react";
import { Due } from "states/add";

const buttons: { title: string; time: Due }[] = [
  {
    title: "10분안에",
    time: 10,
  },
  {
    title: "30분안에",
    time: 30,
  },
  {
    title: "1시간안에",
    time: 60,
  },
  {
    title: "오늘안에",
    time: 1440,
  },
];

function AddDue() {
  const { due, setDue } = useAdd();
  const onTime = useCallback((t: Due) => setDue(t), []);

  return (
    <div className="flex flex-col justify-center flex-1 gap-6">
      {buttons.map((B) => (
        <button
          type="button"
          onClick={() => onTime(B.time)}
          className={`${
            B.time === due && "!bg-sky-500 text-white"
          } btn duration-150`}
          key={B.time}
        >
          {B.title}
        </button>
      ))}
    </div>
  );
}

export default AddDue;
