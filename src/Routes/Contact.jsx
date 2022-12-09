import React, { useState } from 'react'

const Contact = () => {

    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    function handleSubmit(e){
        e.preventDefault();
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        if (user.name.length > 5) {
            if (emailRegex.test(user.email)){
                alert("Muchas gracias por tu mensaje, " + user.name + ". Te contactaremos cuanto antes por email.")
            }
            else {
                alert("Email inválido.")
            }
        } else {
            alert("Nombre demasiado corto.")
        }
        
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre completo" onChange={(e) => setUser ({...user, name: e.target.value})}></input>
            <input type="email" placeholder="Email" onChange={(e) => setUser ({...user, email: e.target.value})}></input>
            <input type="text" placeholder="Ingrese su mensaje"></input>
            <button type="submit">Enviar</button>
        </form>
    </>
  )
}

export default Contact