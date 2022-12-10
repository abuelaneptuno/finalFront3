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
        <button onClick={addFav} className='favButton'>Add fav</button>
    </div>
  );
};

export default Card;
