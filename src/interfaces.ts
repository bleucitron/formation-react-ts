export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: any[];
}

export interface TrainedPokemonData {
  id: number;
  species: PokemonData;
}
