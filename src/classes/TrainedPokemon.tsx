import React, { Component } from 'react';

export interface TrainedPokemonProps {
  name: string;
  weight: number;
  src?: string;
}

interface TrainedPokemonState {
  exp: number;
  nickname: string;
  idInterval: NodeJS.Timer | null;
}

class TrainedPokemon extends Component<
  TrainedPokemonProps,
  TrainedPokemonState
> {
  constructor(p: TrainedPokemonProps) {
    super(p);

    this.state = {
      exp: 0,
      nickname: '',
      idInterval: null,
    };

    this.displayName = this.displayName.bind(this);
    this.updateNickname = this.updateNickname.bind(this);
    this.gainExp = this.gainExp.bind(this);
  }

  displayName() {
    console.log('Je suis', this.props.name);
  }

  gainExp() {
    this.setState(state => ({ exp: state.exp + 10 }));
  }

  updateNickname(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      nickname: e.target.value,
    });
  }

  componentDidMount() {
    const id = setInterval(this.gainExp, 100);
    this.setState({ idInterval: id });
  }
  componentWillUnmount() {
    const { idInterval } = this.state;
    if (idInterval) clearInterval(idInterval);
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp, nickname } = this.state;

    return (
      <li
        className="TrainedPokemon"
        onClick={this.displayName}
        onMouseMove={this.gainExp}
      >
        <input value={nickname} onChange={this.updateNickname} />
        <div className="name">{nickname || name}</div>
        <div className="weight">{weight}</div>
        <div className="exp">{exp}</div>
        {src && <img src={src} alt={name} />}
        <div>{name}</div>
      </li>
    );
  }
}

export default TrainedPokemon;
