import { useState } from "react";

const Pokedex = () => {
  const [pokemonsInPokedex, setPokemonsInPokedex] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pokemon = event.target.newPokemon.value;

    const newPokedex = [...pokemonsInPokedex, pokemon];

    setPokemonsInPokedex(newPokedex);
  };

  return (
    <section>
      <h2>Les pokemons de mon pokedex :</h2>

      <ul>
        {pokemonsInPokedex.map((pokemon) => {
          return <li>{pokemon}</li>;
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          Ajouter un numéro 10 dans ma team
          <input type="text" name="newPokemon" />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Pokedex;
