// hooks/useCountdown.js
import { useEffect, useRef, useState } from "react";

export function useCountdown(initialSeconds, onFinish) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(intervalRef.current);
      onFinish?.();
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [seconds, onFinish]);

  return seconds;
}
