export default function Card({ id, image, name, onCardClick }) {
  return (
    <div className="card-wrapper">
      <div className="card" onClick={() => onCardClick(id)}>
        <img src={image} alt={name} />
      </div>
      <p className="pokemon-name">{name}</p>
    </div>
  );
}
