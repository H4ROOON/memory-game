export default function Card({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
