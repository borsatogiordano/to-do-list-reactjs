
export function Button({ text, onClick, count }) {
  return (
    <button onClick={onClick}>
      {text} - {count}
    </button>
  );
}
