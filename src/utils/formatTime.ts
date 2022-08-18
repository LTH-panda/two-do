import { minutesToHours } from "date-fns";

function formatTime(time: number) {
  if (time >= 1440) return "오늘";
  if (time >= 60) return `${minutesToHours(time)}시간`;

  return `${time}분`;
}

export default formatTime;
