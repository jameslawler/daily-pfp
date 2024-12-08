import { useState, useEffect } from "react";

function getMidnight() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return new Date(
    Date.UTC(
      tomorrow.getUTCFullYear(),
      tomorrow.getUTCMonth(),
      tomorrow.getUTCDate()
    )
  );
}

function msToTime(duration: number) {
  const seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return `${hours < 10 ? "0" + hours : hours} hrs ${
    minutes < 10 ? "0" + minutes : minutes
  } mins ${seconds < 10 ? "0" + seconds : seconds} secs`;
}

export const useCountdown = () => {
  const [enabled, setEnabled] = useState(false);
  const [timeRemainingFormatted, setTimeRemainingFormatted] = useState("");
  const [eventDate] = useState(getMidnight());

  useEffect(() => {
    if (enabled && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          location.reload();
        }

        setTimeRemainingFormatted(msToTime(remainingTime));
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [enabled, eventDate, timeRemainingFormatted]);

  return { setEnabled, timeRemainingFormatted };
};
