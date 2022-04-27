import React from 'react';
import type { PokemonData } from '../interfaces';
import Pokemon from './Pokemon';

export interface PokemonListProps {
  pokemons: PokemonData[];
  catchPokemon(pokemon: PokemonData): void;
}

function PokemonList({ pokemons, catchPokemon }: PokemonListProps) {
  const instances = pokemons.map(pokemon => (
    <Pokemon key={pokemon.id} catchPokemon={catchPokemon} {...pokemon} />
  ));

  return (
    <>
      <ul className="PokemonList list">{instances}</ul>
    </>
  );
}

export default PokemonList;
