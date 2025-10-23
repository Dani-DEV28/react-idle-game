export default function Clicks({ clickCount, handleClick }) {
  return (
    <>
      <p>Total Clicks:</p>
      <button onClick={handleClick}>Click Me!</button>

      {clickCount >= 100 && <h2>You Won! 🎉</h2>}
    </>
  );
}
