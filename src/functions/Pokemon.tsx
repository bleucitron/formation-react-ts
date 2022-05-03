import React from 'react';

interface PokemonProps {
  name: string;
  weight: number;
  src?: string;
  catchPokemon(): void;
}

function Pokemon(props: PokemonProps): JSX.Element {
  const { name, weight, src, catchPokemon } = props;

  return (
    <li className="Pokemon" onClick={catchPokemon}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default React.memo(Pokemon);
