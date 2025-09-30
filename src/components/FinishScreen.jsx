import { useQuiz } from "../contexts/QuizContext";
import BaseButton from "./BaseButton";

export default function FinishScreen() {
  const { score, maxPossibleScore, highscore, restart } = useQuiz();

  function handleRestart() {
    restart();
  }

  const percentage = (score / maxPossibleScore) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{score}</strong> out of{" "}
        {maxPossibleScore} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>

      <BaseButton onClick={handleRestart}>Restart quiz</BaseButton>
    </>
  );
}
