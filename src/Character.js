import styled from 'styled-components/macro';

export default function Character({ name, species, image }) {
  return (
    <CharacterCard>
      <img src={image} alt="profilepic" width="240" height="300"></img>
      <h2>{name}</h2>
      <p>species: {species}</p>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  border: 1px black solid;
  border-radius: 12px;
  padding: 20px;

  &:hover {
    background-color: rgba(220, 220, 220, 0.8);
    transition: 0.6s;
    transform: scale(1.05);
  }
`;
