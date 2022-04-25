import React, { Component } from 'react';
import type { PokemonData } from './App';
import TrainedPokemon from './TrainedPokemon';

export interface ITrainer {
  name: string;
  address: string;
  bag: PokemonData[];
}

class Trainer extends Component<ITrainer> {
  render() {
    const { name, address, bag } = this.props;

    const instances = bag.map(pokemon => (
      <TrainedPokemon
        key={pokemon.id}
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.front_default}
      />
    ));

    return (
      <div className="Trainer">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
      </div>
    );
  }
}

export default Trainer;
