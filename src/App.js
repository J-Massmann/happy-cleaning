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

  useEffect(() => {
    saveToLocal('rooms', rooms);
  }, [rooms]);

  return (
    <div className="App">
      <main>
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
      <main>
        <Header>Flatmates:</Header>
        <Flatmates />
      </main>
      <Navigation />
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
