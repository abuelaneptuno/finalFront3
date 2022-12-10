import React from 'react';
import axios from 'axios';
import { useGlobalStates } from '../Context/context';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Detail = () => {
  const { variablesContext } = useGlobalStates();
  const { stateTema } = variablesContext;
  const [dentista, setDentista] = useState([]);
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {axios(url).then((res) => setDentista(res.data))}, []);

  return (
    <main className={stateTema.color}>
      <h1>Detail Dentist ID: {dentista.id} </h1>
      <h3>Nombre: {dentista.name}</h3>
      <h3>Nombre de usuario: {dentista.username}</h3>
      <h3>Email: {dentista.email}</h3>
      <h3>Teléfono: {dentista.phone}</h3>
      <h3>Sitio web: {dentista.website}</h3>
    </main>
  )
}

export default Detail