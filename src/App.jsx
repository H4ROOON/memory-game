import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();

      const formatted = data.results.map((poke, index) => ({
        id: index,
        name: poke.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      setCards(formatted);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} />
    </div>
  );
}
