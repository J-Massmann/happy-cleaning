import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavigationBar>
      <button>Rooms</button>
      <button>Flatmates</button>
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
  }
`;
