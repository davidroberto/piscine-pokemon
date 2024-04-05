import { useState } from "react";

const Pokedex = () => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const submitPokemon = (event) => {
    event.preventDefault();

    const pokemon = event.target.addPokemon.value;

    const newPokemons = [...capturedPokemons, pokemon];

    setCapturedPokemons(newPokemons);
  };

  return (
    <section>
      <h3>Liste des pokemons attrapés : </h3>
      <ul>
        {capturedPokemons.map((pokemon) => {
          return <li>{pokemon}</li>;
        })}
      </ul>

      <form onSubmit={submitPokemon}>
        <label>
          <input type="text" name="addPokemon" />
        </label>

        <input type="submit" />
      </form>
    </section>
  );
};

export default Pokedex;
