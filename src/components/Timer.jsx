import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { secondRemaining, runTimer } = useQuiz();

  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;

  useEffect(() => {
    const time = setInterval(() => {
      runTimer();
    }, 1000);

    return () => clearInterval(time);
  }, [runTimer]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
