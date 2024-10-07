import Options from "./Options";

/* eslint-disable react/prop-types */
export default function Questions({
  questions: { question, options, correctOption },
  dispatch,
  answer,
}) {
  return (
    <div>
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
}
