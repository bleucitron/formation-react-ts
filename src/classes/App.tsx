import React from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filters from './Filters';
import fetchPokemons from '../utils/fetchPokemon';

export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: any[];
}

interface AppProps {}

interface AppState {
  isElectric: boolean;
  isLoading: boolean;
  data: PokemonData[];
  bag: PokemonData[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(p: AppProps) {
    super(p);

    this.state = {
      isElectric: false,
      isLoading: true,
      data: [],
      bag: [],
    };
    this.toggleFilter = this.toggleFilter.bind(this);
    this.clearBag = this.clearBag.bind(this);
  }

  componentDidMount() {
    fetchPokemons().then(data => {
      this.setState({
        data,
        bag: data.length === 0 ? [] : [data[0]],
        isLoading: false,
      });
    });
  }

  toggleFilter() {
    this.setState(state => ({
      isElectric: !state.isElectric,
    }));
  }
  clearBag() {
    this.setState({
      bag: [],
    });
  }

  render() {
    const { isElectric, isLoading, data, bag } = this.state;

    const displayed = isElectric
      ? data.filter(item => item.types.find(t => t.type.name === 'electric'))
      : data;

    return (
      <div className="App">
        <Trainer
          name="Romain"
          address="1 rue des pokemons"
          bag={bag}
          clearBag={this.clearBag}
        />
        <Filters
          label="Electric"
          isSelected={isElectric}
          toggle={this.toggleFilter}
        />
        {isLoading ? 'loading...' : <PokemonList pokemons={displayed} />}
      </div>
    );
  }
}

export default App;
