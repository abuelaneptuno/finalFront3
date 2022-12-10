import React from 'react'
import "./navbar.css"
import { useGlobalStates } from '../Context/context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { variablesContext } = useGlobalStates();
  const { stateTema, dispatchTema } = variablesContext;

  const handleClick = () => {
    dispatchTema({type: stateTema.color === "light" ? "DARK" : "LIGHT" })
  }

  return (
    <nav className="navbar">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleClick}>Change theme</button>
    </nav>
  )
}

export default Navbar