export interface TrainedPokemonData {
  id: number;
  species: PokemonData;
}

export interface PokemonData {
  catchId?: number;
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  types: { type: { name: string } }[];
}
