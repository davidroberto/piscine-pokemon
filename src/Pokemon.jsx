const Pokemon = ({ pokemon, displayImage }) => {
  return (
    <article>
      <h3>{pokemon.name}</h3>

      {displayImage && <img src={pokemon.image} alt={pokemon.name} />}

      <p>Type : {pokemon.type}</p>
    </article>
  );
};

export default Pokemon;
