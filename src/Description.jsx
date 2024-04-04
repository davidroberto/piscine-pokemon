import { useState } from "react";

const Description = () => {
  // useState permet de créer une variable, stockée en dehors du composant
  // useState prend en parametre la valeur par défaut de la variable
  // useState retourne la valeur de la variable et une fonction pour
  // modifier la valeur de la variable
  const [display, setDisplay] = useState(false);

  const onClickFunction = () => {
    // au click, je modifie la valeur de la variable display
    // et je la passe à true
    // la fonction setDisplay force le composant à être rechargé
    // donc à effacer le "HTML" qui avait été créé pour ce composant
    // et à le recréer, mais en gardant en mémoire la nouvelle valeur
    // de display
    setDisplay(true);
  };

  return (
    <section>
      <button onClick={onClickFunction}>Afficher la description du site</button>
      {/* 
			on regarde la valeur de la variable display 
			si elle est true, on affiche un message.
			Si elle est false, on affiche rien
		*/}
      {display && <p>Pokemons, attrapez les tous, blablalbalb</p>}
    </section>
  );
};

export default Description;
