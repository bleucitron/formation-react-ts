import React from 'react';
import type { PokemonData } from '../classes/App';

export interface PokemonProps extends PokemonData {
  catchPokemon(pokemon: PokemonData): void;
}

function Pokemon({ catchPokemon, ...pokemon }: PokemonProps): JSX.Element {
  const {
    name,
    weight,
    sprites: { front_default: src },
  } = pokemon;

  return (
    <li className="Pokemon" onClick={() => catchPokemon(pokemon)}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default Pokemon;
