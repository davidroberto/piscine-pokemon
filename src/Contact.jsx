import { useState } from "react";

const CreateYourPokemon = () => {
  const [pokemonName, setPokemonName] = useState(null);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <form>
      <label>
        Choisir votre pokemon
        <input onChange={handleChange} type="text" name="name" />
        {pokemonName && <p> Allez {pokemonName}, à l'attaque</p>}
      </label>
    </form>
  );
};

export default CreateYourPokemon;
