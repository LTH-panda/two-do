import { Duration, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

function useTimer(mins: number) {
  const time = new Date();
  time.setMinutes(time.getMinutes() + mins);
  const [count, setCount] = useState<Duration>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(
        intervalToDuration({
          start: Date.now(),
          end: time,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { count };
}

export default useTimer;
