import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [rewards, setRewards] = useState([]);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Rewards
    if (newCount === 10) setRewards([...rewards, "You get an ice cream 🍦"]);
    if (newCount === 50) setRewards([...rewards, "A bowl of soup 🍲"]);
    if (newCount === 100) setRewards([...rewards, "Here's your burger... 🍔 "]);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <h1>Idle Clicker Game</h1>
        <p>Total Clicks: {clickCount}</p>
        <button onClick={handleClick}>Click Me!</button>

        <h2>Rewards:</h2>
        <ul>
          {rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
