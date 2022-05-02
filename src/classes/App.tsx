import React, { Component } from 'react';

import Trainer from './Trainer';
import PokemonList from './PokemonList';
import type { PokemonData } from '../interfaces';

interface AppProps {
  data: PokemonData[];
}

class App extends Component<AppProps> {
  render() {
    const { data } = this.props;

    console.log('DATA', data);

    // const randomId = Math.floor(Math.random() * data.length);

    return (
      <div className="App">
        <Trainer name="Romain" address="1 rue des pokemons" bag={[data[0]]} />
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
