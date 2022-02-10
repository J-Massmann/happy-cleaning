import { useEffect, useState } from 'react';
import Character from './Character.js';
import styled from 'styled-components/macro';

export default function Flatmates() {
  const [hasError, setHasError] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results.slice(0, 3));
    } catch (error) {
      setHasError(true);
    }
  }

  return (
    <CharacterContainer>
      <p>{hasError && 'Error: could not load characters'}</p>
      {characters.map(({ name, species, image, id }) => (
        <Character key={id} name={name} species={species} image={image} />
      ))}
    </CharacterContainer>
  );
}

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
