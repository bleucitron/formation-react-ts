import React, { PureComponent } from 'react';

import Pokemon from './Pokemon';
import { PokemonData } from '../interfaces';

interface PokemonListProps {
  pokemons: PokemonData[];
  catchPokemon(p: PokemonData): void;
}

class PokemonList extends PureComponent<PokemonListProps> {
  render() {
    const { pokemons, catchPokemon } = this.props;

    const instances = pokemons.map(pokemon => (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        weight={pokemon.weight}
        catchPokemon={() => catchPokemon(pokemon)}
        src={pokemon.sprites.front_default}
      />
    ));

    return <ul className="PokemonList list">{instances}</ul>;
  }
}

export default PokemonList;
