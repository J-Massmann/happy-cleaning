import './Room.css';

export default function Room({
  text,
  isClean,
  description,
  isDescriptionVisible,
}) {
  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';
  return (
    <section className="Room">
      <header className="RoomHeader">
        {text} <div className={statusClassName}></div>
      </header>
      {isDescriptionVisible && <p>{description}</p>}
    </section>
  );
}
