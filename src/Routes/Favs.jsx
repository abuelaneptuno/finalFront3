import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/context";

const Favs = () => {
  const { variablesContext } = useGlobalStates();
  const { favoritos, stateTema } = variablesContext;

  return (
    <div className={stateTema.color}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favoritos.map((dentista) => (
            <div key={dentista.id}>
              <Card name={dentista.name} username={dentista.username} id={dentista.id}  />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favs;
