import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Context/context";

const Card = ({ name, username, id }) => {
  const { variablesContext } = useGlobalStates();
  const { dispatchFav } = variablesContext;

  const addFav = ()=>{
    dispatchFav({
      type: "NUEVO_FAV",
      payload: { name, username, id },
    });
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <div>
          <h3>Nombre: {name}</h3>
          <h3>Nombre de usuario: {username}</h3>
          <h3>ID: {id}</h3>
        </div></Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
