import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import { useImmer } from 'use-immer';

export default function App() {
  const [rooms, updateRooms] = useImmer([
    {
      text: 'Küche',
      description: 'Herdplatte nicht vergessen!',
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen!',
      isClean: false,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isClean: false,
    },
  ]);
  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      {rooms.map(({ text, description, isClean }, index) => (
        <Room
          key={text}
          text={text}
          description={description}
          isClean={isClean}
          toggleStatus={event => {
            event.stopPropagation();

            updateRooms(draft => {
              draft[index].isClean = !isClean;
            });
          }}
        />
      ))}
    </main>
  );
}
