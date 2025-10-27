import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setClickedCards([]);
      setScore(0);
    } else {
      setClickedCards((prev) => [...prev, id]);
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
      setCards(shuffleArray(cards));
    }
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();

      const formatted = data.results.map((pokemon) => {
        const id = pokemon.url.split("/").filter(Boolean).pop();
        return {
          id: id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });

      setCards(formatted);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="scoreboard">
        <p>
          Score: <span>{score}</span>
        </p>
        <p className="best-score">Best Score: {bestScore}</p>
      </div>

      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}
