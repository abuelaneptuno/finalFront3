import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Routes/Home";
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact";
import Context from "./Context/context"
import Favs from './Routes/Favs';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Context>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="home" element={<Home/>} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="dentist/:id" element={<Detail />} />
        <Route path="favoritos" element={<Favs />} />
      </Route>
    </Routes>
    </BrowserRouter>
   </Context>
  </React.StrictMode>
);


