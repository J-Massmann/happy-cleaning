import { useState } from 'react';
import styled from 'styled-components';
import './Navigation.css';

export default function Navigation(currentPage, setcurrentPage) {
  return (
    <NavigationBar>
      <button
        onClick={() => {
          setcurrentPage('Rooms');
        }}
        sytling="Rooms"
        currentPage={currentPage}
      >
        Rooms
      </button>
      <button
        onClick={() => {
          setcurrentPage('Flatmates');
        }}
        sytling="Flatmates"
        currentPage={currentPage}
      >
        Flatmates
      </button>
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: 50%;
    border: 1px black solid;
    background-color: ${props =>
      props.sytling === props.currentPage ? 'gray' : 'lightgray'};
  }
`;
