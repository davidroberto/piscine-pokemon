import { useState } from "react";

const PokemonsFromApi = () => {
  const [pokemons, setPokemons] = useState(null);

  fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPokemons(data);
    });

  return (
    <section>
      <h2>La liste des 900 pokemons (mais les vrais savent qu'il y en a que 151)</h2>

      {!pokemons ? (
        <p>Pokemons en cours de chargement</p>
      ) : (
        <>
          {pokemons.map((pokemon) => {
            return (
              <article>
                <h2>{pokemon.name}</h2>
              </article>
            );
          })}
        </>
      )}
    </section>
  );
};

export default PokemonsFromApi;
