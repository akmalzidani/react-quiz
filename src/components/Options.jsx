import { useQuiz } from "../contexts/QuizContext";

export default function Options({ question }) {
  const { answer, selectAnswer } = useQuiz();

  function handleAnswer(index) {
    selectAnswer(index);
  }

  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswer}
          onClick={() => handleAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
