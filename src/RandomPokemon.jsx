import Pokemon from "./Pokemon";

const RandomPokemon = ({ pokemons }) => {
  const randomIndexForPokemons = Math.round(Math.random() * (pokemons.length - 1));

  const randomPokemon = pokemons[randomIndexForPokemons];

  return (
    <section>
      <h2>Le pokemon du jour : </h2>
      <Pokemon pokemon={randomPokemon} />
    </section>
  );
};

export default RandomPokemon;