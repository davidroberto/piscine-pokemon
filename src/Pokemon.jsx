import { useState } from "react";

const Pokemon = ({ pokemon, displayImage }) => {
  const [pokemonLikes, setPokemonLikes] = useState(0);

  const likePokemon = () => {
    setPokemonLikes(pokemonLikes + 1);
  };

  return (
    <article>
      <h3>{pokemon.name}</h3>

      {displayImage && <img src={pokemon.image} alt={pokemon.name} />}

      <p>Type : {pokemon.type}</p>

      <p>Ce pokémon a été liké {pokemonLikes} fois</p>
      <button onClick={likePokemon}>Likez le pokemon</button>
    </article>
  );
};

export default Pokemon;
