import { minutesToMilliseconds } from "date-fns";
import usePlan from "hooks/usePlan";
import React, { useEffect, useRef } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

const renderer: CountdownRendererFn = ({ completed, formatted }) => (
  <div
    className={`${
      completed ? "text-rose-500" : "text-sky-500"
    } font-primary text-xl `}
  >
    {completed && "+"} {formatted.hours} : {formatted.minutes} :{" "}
    {formatted.seconds}
  </div>
);

function PlanTimer() {
  const timerRef = useRef<Countdown>(null);
  const { plan, countDownTime, isOpenPlanComplete } = usePlan();

  useEffect(() => {
    if (isOpenPlanComplete) timerRef.current?.getApi().pause();
  }, [isOpenPlanComplete]);

  return (
    <div>
      <Countdown
        date={countDownTime + minutesToMilliseconds(plan.due)}
        renderer={renderer}
        overtime
        ref={timerRef}
      />
    </div>
  );
}

export default PlanTimer;
