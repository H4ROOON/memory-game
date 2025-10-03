import Card from "./Card";

export default function CardGrid({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} name={card.name} image={card.image} />
      ))}
    </div>
  );
}
