import React, { PureComponent } from 'react';
import type { PokemonData } from '../interfaces';
import TrainedPokemon from './TrainedPokemon';

export interface TrainerProps {
  name: string;
  address: string;
  bag: PokemonData[];
  clearBag(): void;
}

class Trainer extends PureComponent<TrainerProps> {
  render() {
    const { name, address, bag, clearBag } = this.props;

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
        <button onClick={clearBag}>Vider</button>
        <ul>{instances}</ul>
      </div>
    );
  }
}

export default Trainer;
