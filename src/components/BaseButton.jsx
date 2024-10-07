/* eslint-disable react/prop-types */
export default function BaseButton({ children, onClick }) {
  return (
    <button className="btn btn-ui" onClick={onClick}>
      {children}
    </button>
  );
}
