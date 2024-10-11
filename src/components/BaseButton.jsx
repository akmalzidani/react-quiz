export default function BaseButton({ children, onClick }) {
  return (
    <button className="btn btn-ui" onClick={onClick}>
      {children}
    </button>
  );
}
