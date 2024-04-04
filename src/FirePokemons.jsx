import Pokemon from "./Pokemon";

const FirePokemons = ({ pokemons }) => {
  const firePokemons = pokemons.filter((pokemon) => {
    return pokemon.type === "Fire";
  });

  return (
    <section>
      <h2>Les pokemons beaucoup trop chauds :</h2>

      {firePokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} displayImage={true} />;
      })}
    </section>
  );
};

export default FirePokemons;
