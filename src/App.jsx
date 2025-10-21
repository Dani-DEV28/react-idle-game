import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import Inventory from "../components/Inventory";
import Reward from "../components/Reward";
import Clicks from "../components/Clicks";

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [reward, setReward] = useState(null);
  const [inventory, setInventory] = useState([]);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    let rewardMessage = "";
    let newItem = null;

    // Rewards logic
    if (newCount === 10) {
      rewardMessage = "You got an ice cream 🍦!";
      newItem = { emoji: "🍦" };
    } else if (newCount === 50) {
      rewardMessage = "You got a bowl of soup 🍲!";
      newItem = { emoji: "🍲" };
    } else if (newCount === 100) {
      rewardMessage = "You got a burger! 🍔";
      newItem = { emoji: "🍔" };
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
        <Clicks clickCount={clickCount} handleClick={handleClick} />
        <div className="container">
          <Reward reward={reward} />
          <Inventory inventory={inventory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
