const Pokemon = ({ pokemon }) => {
  return (
    <article>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type : {pokemon.type}</p>
    </article>
  );
};

export default Pokemon;
