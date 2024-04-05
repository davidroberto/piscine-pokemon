import Pokemon from "./Pokemon";

const RandomPokemon = ({ pokemons }) => {
  const randomIndexForPokemons = Math.round(Math.random() * (pokemons.length - 1));
  const randomPokemon = pokemons[randomIndexForPokemons];

  const clickBtnFunction = () => {};

  return (
    <section>
      <h2>Le pokemon du jour : </h2>
      <button onClick={clickBtnFunction}>Afficher le pokemon du jour</button>

      <Pokemon pokemon={randomPokemon} displayImage={true} />
    </section>
  );
};

export default RandomPokemon;
