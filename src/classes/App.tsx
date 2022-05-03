import React, { PureComponent } from 'react';

import Trainer from '../classes/Trainer';
import Filters from '../classes/Filters';
import PokemonList from '../classes/PokemonList';
import { fetchAll } from '../utils/pokemons';
import type { PokemonData, TrainedPokemonData } from '../interfaces';

interface AppProps {}
interface AppState {
  active: boolean;
  isLoading: boolean;
  data: PokemonData[];
  bag: TrainedPokemonData[];
}

class App extends PureComponent<AppProps, AppState> {
  constructor(p: AppProps) {
    super(p);

    this.state = {
      active: false,
      isLoading: true,
      data: [],
      bag: [],
    };

    this.toggle = this.toggle.bind(this);
    this.catchPokemon = this.catchPokemon.bind(this);
    this.releasePokemon = this.releasePokemon.bind(this);
  }

  toggle() {
    this.setState(state => ({ active: !state.active }));
  }

  catchPokemon(pokemon: PokemonData) {
    if (pokemon) {
      this.setState(prevState => {
        return {
          bag: [
            ...prevState.bag,
            {
              id: Date.now(),
              species: pokemon,
            },
          ],
        };
      });
    }
  }

  releasePokemon(id: number) {
    this.setState(prevState => {
      return {
        bag: prevState.bag.filter(p => p.id !== id),
      };
    });
  }

  componentDidMount() {
    fetchAll().then(valeurPromise => {
      this.setState({
        data: valeurPromise,
        isLoading: false,
      });
    });
  }

  render() {
    const { active, data, isLoading, bag } = this.state;

    const displayedList = active
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === 'electric'),
        )
      : data;

    const content = isLoading ? (
      <div>Chargement</div>
    ) : (
      <>
        <Filters active={active} label="electric" toggle={this.toggle} />
        <PokemonList
          pokemons={displayedList}
          catchPokemon={this.catchPokemon}
        />
      </>
    );

    return (
      <div className="App">
        <Trainer
          name="Romain"
          address="1 rue des pokemons"
          bag={bag}
          releasePokemon={this.releasePokemon}
        />
        {content}
      </div>
    );
  }
}

export default App;
