import Pokemon from "./Pokemon";

const DisplayAllPokemons = ({ pokemons }) => {
  return (
    <section>
      <h2>Tous les pokémons</h2>
      {pokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} displayImage={false} />;
      })}
    </section>
  );
};

export default DisplayAllPokemons;
