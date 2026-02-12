// utils/formatTime.js
export function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  return {
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}
