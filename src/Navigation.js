import { useState } from 'react';
import styled from 'styled-components';
import './Navigation.css';

export default function Navigation({
  currentPage,
  setcurrentPage,
  toggleRooms,
}) {
  return (
    <NavigationBar>
      <NavigationButton
        onClick={() => {
          setcurrentPage('Rooms');
          toggleRooms();
        }}
        sytling="Rooms"
        currentPage={currentPage}
      >
        Rooms
      </NavigationButton>
      <NavigationButton
        onClick={() => {
          setcurrentPage('Flatmates');
          toggleRooms();
        }}
        sytling="Flatmates"
        currentPage={currentPage}
      >
        Flatmates
      </NavigationButton>
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const NavigationButton = styled.button`
  width: 50%;
  border: 1px black solid;
  padding: 20px 0 20px 0;
  background-color: ${props =>
    props.sytling === props.currentPage ? 'gray' : 'lightgray'};
`;
