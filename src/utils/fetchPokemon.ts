const url = 'https://pokeapi.co/api/v2/pokemon';

export default function fetchPokemons() {
  return Promise.all(
    Array.from({ length: 151 }, (_, index) => index + 1).map(async id => {
      const data = await fetch(`${url}/${id}`).then(r => r.json());
      delete data.moves;
      delete data.abilities;
      delete data.game_indices;
      return data;
    }),
  );
}
