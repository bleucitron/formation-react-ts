import React, { Component } from 'react';
import type { PokemonData } from '../interfaces';
import Pokemon from './Pokemon';

export interface PokemonListProps {
  pokemons: PokemonData[];
}

class PokemonList extends Component<PokemonListProps> {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(pokemon => (
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.front_default}
      />
    ));

    return (
      <>
        <ul className="PokemonList list">{instances}</ul>
      </>
    );
  }
}

export default PokemonList;
