import React from 'react';
import { Link } from 'react-router-dom';
import type { PokemonData } from '../interfaces';

export interface PokemonProps extends PokemonData {
  catchPokemon?(pokemon: PokemonData): void;
}

function Pokemon({ catchPokemon, ...pokemon }: PokemonProps): JSX.Element {
  const {
    id,
    name,
    weight,
    sprites: { front_default: src },
  } = pokemon;

  return (
    <li className="Pokemon">
      <Link to={`/pokemon/${id}`}>
        <div className="name">{name}</div>
      </Link>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
      {catchPokemon ? (
        <button onClick={() => catchPokemon?.(pokemon)}>Catch</button>
      ) : null}
    </li>
  );
}

export default Pokemon;
