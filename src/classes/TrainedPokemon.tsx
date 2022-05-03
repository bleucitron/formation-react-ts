import React, { PureComponent } from 'react';
import type { TrainedPokemonData } from '../interfaces';

interface TrainedPokemonProps extends TrainedPokemonData {
  releasePokemon(id: number): void;
}
interface TrainedPokemonState {
  nickname: string;
  exp: number;
}

class TrainedPokemon extends PureComponent<
  TrainedPokemonProps,
  TrainedPokemonState
> {
  idInterval: NodeJS.Timer | null = null;

  constructor(p: TrainedPokemonProps) {
    super(p);

    this.state = {
      nickname: '',
      exp: 0,
    };

    this.gainExp = this.gainExp.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentDidMount() {
    this.idInterval = setInterval(this.gainExp, 100);
  }

  componentWillUnmount() {
    if (this.idInterval) {
      clearInterval(this.idInterval);
    }
  }

  gainExp() {
    this.setState(prevState => {
      return {
        exp: prevState.exp + 10,
      };
    });
  }

  updateName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      nickname: e.target.value,
    });
  }

  render() {
    const {
      id,
      species: { name, weight, sprites },
      releasePokemon,
    } = this.props;
    const { nickname, exp } = this.state;

    const src = sprites.front_default;

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <input value={nickname} onChange={this.updateName} />
        <div className="name">{nickname || name}</div>
        <div className="weight">{weight}</div>
        <div className="exp">{exp}</div>
        <button onClick={() => releasePokemon(id)}>Libérer</button>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
