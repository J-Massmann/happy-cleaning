import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import Flatmates from './Flatmates.js';
import Navigation from './Navigation.js';

export default function App() {
  const [rooms, updateRooms] = useImmer(
    loadFromLocal('rooms') ?? [
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
    ]
  );

  const [currentPage, setcurrentPage] = useState('Rooms');
  // const [isRoomsHidden, setIsRoomsHidden] = useState(false);
  // const [isFlatmatesHidden, setIsFlatmatesHidden] = useState(true);
  const isRoomsHidden = currentPage === 'Rooms' ? '' : 'hidden';
  const isFlatmatesHidden = currentPage === 'Flatmates' ? '' : 'hidden';

  // function toggleRooms() {
  //   if (currentPage === 'Rooms') {
  //     setIsRoomsHidden(false);
  //     setIsFlatmatesHidden(true);
  //   } else if (currentPage === 'Flatmates') {
  //     setIsRoomsHidden(true);
  //     setIsFlatmatesHidden(false);
  //   }
  // }

  console.log(currentPage);

  useEffect(() => {
    saveToLocal('rooms', rooms);
  }, [rooms]);

  return (
    <div className="App">
      <Header>{currentPage}</Header>
      <main hidden={isRoomsHidden}>
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
      <main hidden={isFlatmatesHidden}>
        <Flatmates />
      </main>
      <Navigation currentPage={currentPage} setcurrentPage={setcurrentPage} />
    </div>
  );
}

function loadFromLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
}

function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
