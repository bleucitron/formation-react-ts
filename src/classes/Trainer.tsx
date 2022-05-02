import React, { Component } from 'react';
import TrainedPokemon from './TrainedPokemon';
import type { PokemonData } from '../interfaces';

interface TrainerProps {
  name: string;
  address: string;
  bag: PokemonData[];
}

class Trainer extends Component<TrainerProps> {
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
        <ul>{instances}</ul>
      </div>
    );
  }
}

export default Trainer;
