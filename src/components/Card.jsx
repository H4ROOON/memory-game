export default function Card({ id, image, name, onCardClick }) {
  return (
    <div className="card" onClick={() => onCardClick(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
