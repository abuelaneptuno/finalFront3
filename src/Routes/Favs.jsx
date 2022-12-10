import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/context";

const Favs = () => {
  const { variablesContext } = useGlobalStates();
  const { favoritos } = variablesContext;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favoritos.map((dentista) => (
            <div key={dentista.id}>
              <Card name={dentista.name} username={dentista.username} id={dentista.id}  />
            </div>
          ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
