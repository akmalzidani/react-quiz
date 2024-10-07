import Options from "./Options";

/* eslint-disable react/prop-types */
export default function Questions({ question: { question, options } }) {
  return (
    <div>
      <h4>{question}</h4>
      <Options options={options} />
    </div>
  );
}
