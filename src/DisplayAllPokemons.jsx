import Pokemon from "./Pokemon";

const PokemonsTeam = ({ pokemons }) => {
  return (
    <section>
      <h2>Les pokemons de votre team :</h2>
      {pokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} displayImage={false} />;
      })}
    </section>
  );
};

export default PokemonsTeam;
