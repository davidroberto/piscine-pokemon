import Pokemon from "./Pokemon";

const LastCapturedPokemons = ({ pokemons }) => {
  const pokemonsSortedByCaptureDate = pokemons.sort((a, b) => {
    return new Date(b.capturedAt) - new Date(a.capturedAt);
  });

  const lastThreeCapturedPokemons = pokemonsSortedByCaptureDate.slice(0, 3);

  return (
    <section>
      <h2>Les derniers pokemons capturés : </h2>

      {lastThreeCapturedPokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} />;
      })}
    </section>
  );
};

export default LastCapturedPokemons;
