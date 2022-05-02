export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
}
