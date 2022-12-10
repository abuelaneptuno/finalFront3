import React from 'react'
import { useGlobalStates } from '../Context/context';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { variablesContext } = useGlobalStates();
  const { stateTema, dispatchTema } = variablesContext;

  const handleClick = () => {
    dispatchTema({type: stateTema.color === "light" ? "DARK" : "LIGHT" })
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favoritos">Favs</Link>
      <button onClick={handleClick}>Change theme</button>
    </nav>
  )
}

export default Navbar