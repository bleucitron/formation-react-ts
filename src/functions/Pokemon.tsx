import React from 'react';
import { Link } from 'react-router-dom';

interface PokemonProps {
  id: number;
  name: string;
  weight: number;
  src?: string;
  catchPokemon?(): void;
}

function Pokemon(props: PokemonProps): JSX.Element {
  const { id, name, weight, src, catchPokemon } = props;

  const url = '/pokemon/' + id;

  return (
    <li className="Pokemon">
      <div className="name">
        <Link to={url}>{name}</Link>
      </div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
      <button onClick={catchPokemon}>Attraper</button>
    </li>
  );
}

export default React.memo(Pokemon);
