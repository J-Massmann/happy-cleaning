import { useState } from 'react';
import './Room.css';

export default function Room({ text, isClean, description, toggleStatus }) {
  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  function toggleDescription() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }

  return (
    <section className="Room" onClick={toggleDescription}>
      <header className="RoomHeader">
        {text} <div onClick={toggleStatus} className={statusClassName}></div>
      </header>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </section>
  );
}
