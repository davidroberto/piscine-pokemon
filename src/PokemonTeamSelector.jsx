import { useState } from "react";

const PokemonTeamSelector = ({ pokemons }) => {
  const [pokemonName, setPokemonName] = useState(null);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  let pokemonExists = false;

  pokemons.forEach((pokemon) => {
    if (pokemon.name === pokemonName) {
      pokemonExists = true;
    }
  });

  return (
    <form>
      <label>
        Choisir le pokemon à ajouter dans votre team
        <input onChange={handleChange} type="text" name="name" />
        {pokemonExists && <p>Le pokemon est déjà la team !</p>}
        {pokemonName && <p> Allez {pokemonName}, à l'attaque</p>}
      </label>
    </form>
  );
};

export default PokemonTeamSelector;
