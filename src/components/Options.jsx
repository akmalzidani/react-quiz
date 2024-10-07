/* eslint-disable react/prop-types */
export default function Options({ options, dispatch, answer, correctOption }) {
  function handleAnswer(index) {
    dispatch({ type: "newAnswer", payload: index });
  }

  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer ? (index === correctOption ? "correct" : "wrong") : ""
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
