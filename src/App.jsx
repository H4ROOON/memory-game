import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid />
    </div>
  );
}
