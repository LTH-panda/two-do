import {
  hoursToMilliseconds,
  intervalToDuration,
  minutesToMilliseconds,
  secondsToMilliseconds,
  startOfTomorrow,
} from "date-fns";

function getDueToTime(time: number) {
  if (time >= 1440) {
    const duraiton = intervalToDuration({
      start: Date.now(),
      end: startOfTomorrow(),
    });
    return (
      hoursToMilliseconds(duraiton.hours || 0) +
      minutesToMilliseconds(duraiton.minutes || 0) +
      secondsToMilliseconds(duraiton.seconds || 0)
    );
  }
  return minutesToMilliseconds(time);
}

export default getDueToTime;
