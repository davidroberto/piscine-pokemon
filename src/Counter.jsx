import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  console.log("rendu du composant");

  return (
    <section>
      <p>{likes}</p>
      <button onClick={addLike}>Like ce pokemon</button>
    </section>
  );
};

export default Counter;
