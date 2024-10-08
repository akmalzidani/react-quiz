import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Timer({ secondRemaining, dispatch }) {
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;

  useEffect(() => {
    const time = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(time);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
