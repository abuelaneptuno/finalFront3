import { useEffect } from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { useGlobalStates } from "../Context/Context"

const Home = () => {
  const [dentistas, setDentistas] = useState([])
  const {datos} = useGlobalStates()

  const getDentistas = async()=>{
    const res = await fetch("https://dhodonto.ctdprojetos.com.br/dentista")
    const data = await res.json()
    setDentistas(data)
  }

  useEffect(() => {
    getDentistas();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.length
        ? dentistas.map(dentista => <Card data = {dentista} key={dentista.matricula}/>)
        : null}   
      </div>
    </>
  );
};

export default Home;
