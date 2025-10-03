export default function Card({ Image, name }) {
  return (
    <div className="card">
      <img src={Image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
