import { useEffect, useState } from 'react';

export default function Flatmates() {
  const [hasError, setHasError] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => getCharacters(), []);

  async function getCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      setHasError(true);
    }

    return <p>{hasError && 'Error: could not load characters'}</p>;
  }
}
