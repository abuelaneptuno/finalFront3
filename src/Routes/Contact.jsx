import React, { useState } from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Context/context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    
  const { variablesContext } = useGlobalStates();
  const { stateTema } = variablesContext;

  return (
    <div className={stateTema.color}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}


export default Contact