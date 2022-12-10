import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Context/context'

const Home = () => {
  const { variablesContext } = useGlobalStates();
  const { dentistas, stateTema } = variablesContext;

  return (
    <>
    <main className={stateTema.color} >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentistas.map((dentista) => (
            <div key={dentista.id}>
              <Card name={dentista.name} username={dentista.username} id={dentista.id}  />
            </div>
          ))}
      </div>
    </main></>
  )
}

export default Home