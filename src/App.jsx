import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [reward, setReward] = useState(null);
  const [inventory, setInventory] = useState([]);


  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    let rewardMessage = "";
    let newItem = null;

    // Rewards
    if (newCount === 10) {
      rewardMessage = "You got an ice cream 🍦!";
      newItem = {emoji: "🍦"};
    } else if (newCount === 50) {
      rewardMessage = "You got a bowl of soup 🍲!";
      newItem = {emoji: "🍲"};
    } else if (newCount === 100) {
      rewardMessage = "You got a burger! 🍔";
      newItem = {emoji: "🍔"};
    }

    if (rewardMessage && newItem) {
      setReward(rewardMessage);
      setInventory((prev) => [...prev, newItem]);
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <p>Total Clicks: {clickCount}</p>
        <button onClick={handleClick}>Click Me!</button>

        {clickCount >= 100 && <h2>You Won! 🎉</h2>}
        <div className="container">
          <div className="item">
            <h3>Reward:</h3>
            <p>{reward}</p>
          </div>
          <div className="item">
            <h3>Inventory:</h3>
            <p>{inventory.map((item, index) => item.emoji).join(" ")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
