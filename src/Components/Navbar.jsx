import React from 'react'
import "./navbar.css"
import { useGlobalStates } from '../Context/context';
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { variablesContext } = useGlobalStates();
  const { stateTema, dispatchTema } = variablesContext;

  const handleClick = () => {
    dispatchTema({type: stateTema.color === "light" ? "DARK" : "LIGHT" })
  }

  return (
    <nav className="navbar navegacion">
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favoritos">Favs</Link>
      <button onClick={handleClick}>Change theme</button>
    
    </nav>
  )
}

export default Navbar