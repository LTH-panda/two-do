import { minutesToMilliseconds } from "date-fns";
import usePlan from "hooks/usePlan";
import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

const renderer: CountdownRendererFn = ({ completed, formatted }) => (
  <div className={`${completed && "text-rose-500"} font-primary `}>
    {completed && "+"} {formatted.hours} : {formatted.minutes} :{" "}
    {formatted.seconds}
  </div>
);

function PlanTimer() {
  const { plan, countDownTime } = usePlan();

  return (
    <div>
      <Countdown
        date={countDownTime + minutesToMilliseconds(plan.due)}
        renderer={renderer}
        overtime
      />
    </div>
  );
}

export default PlanTimer;
