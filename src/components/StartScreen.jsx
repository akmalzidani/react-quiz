import BaseButton from "./BaseButton";

// eslint-disable-next-line react/prop-types
export default function StartScreen({ numQuestions, dispatch }) {
  function handleStart() {
    dispatch({ type: "startQuiz" });
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React Mastery!</h3>
      <BaseButton onClick={handleStart}>Let&apos;s start</BaseButton>
    </div>
  );
}
