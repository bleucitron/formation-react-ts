import React from 'react';

import Pokemon from './Pokemon';
import { PokemonData } from '../interfaces';

interface PokemonListProps {
  pokemons: PokemonData[];
  catchPokemon(p: PokemonData): void;
}

function PokemonList(props: PokemonListProps): JSX.Element {
  const { pokemons, catchPokemon } = props;

  const instances = pokemons.map(pokemon => (
    <Pokemon
      key={pokemon.id}
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
      catchPokemon={() => catchPokemon(pokemon)}
    />
  ));

  return <ul className="PokemonList list">{instances}</ul>;
}

export default React.memo(PokemonList);
