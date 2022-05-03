import React, { PureComponent } from 'react';
import TrainedPokemon from './TrainedPokemon';
import type { TrainedPokemonData } from '../interfaces';

interface TrainerProps {
  name: string;
  address: string;
  bag: TrainedPokemonData[];
  releasePokemon(id: number): void;
}

class Trainer extends PureComponent<TrainerProps> {
  render() {
    const { name, address, bag, releasePokemon } = this.props;

    const instances = bag.map(pokemon => (
      <TrainedPokemon
        key={pokemon.id}
        {...pokemon}
        releasePokemon={releasePokemon}
      />
    ));

    return (
      <div className="Trainer">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <ul className="list">{instances}</ul>
      </div>
    );
  }
}

export default Trainer;
