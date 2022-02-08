import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  const rooms = [
    {
      text: 'Küche',
      description: 'Herdplatte nicht vergessen!',
      isDescriptionVisible: true,
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen!',
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isDescriptionVisible: false,
      isClean: false,
    },
  ];
  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      {rooms.map(({ text, description, isDescriptionVisible, isClean }) => (
        <Room
          key={text}
          text={text}
          isClean={isClean}
          description={description}
          isDescriptionVisible={isDescriptionVisible}
        />
      ))}
    </main>
  );
}
