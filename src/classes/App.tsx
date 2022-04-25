import React from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filters from './Filters';

export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: any[];
}

interface AppProps {
  data: PokemonData[];
}

interface AppState {
  isElectric: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(p: AppProps) {
    super(p);

    this.state = {
      isElectric: false,
    };
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter() {
    this.setState({
      isElectric: !this.state.isElectric,
    });
  }

  render() {
    const { data } = this.props;
    const { isElectric } = this.state;

    const displayed = isElectric
      ? data.filter(item => item.types.find(t => t.type.name === 'electric'))
      : data;

    const bag = [data[0]];

    return (
      <div className="App">
        <Trainer name="Romain" address="1 rue des pokemons" bag={bag} />
        <Filters label="Electric" toggle={this.toggleFilter} />
        <PokemonList pokemons={displayed} />
      </div>
    );
  }
}

export default App;
