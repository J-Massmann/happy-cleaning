import styled from 'styled-components/macro';

export default function Character({ name, species, image }) {
  return (
    <CharacterContainer>
      <h1>Flatmates:</h1>
      <img src={image} alt="profilepic"></img>
      <h2>{name}</h2>
      <p>species: {species}</p>
    </CharacterContainer>
  );
}

const CharacterContainer = styled.article`
  display: grid;
`;
