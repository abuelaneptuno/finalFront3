import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import Login from "./Routes/Login"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact";
import App from "./App"
import "./index.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Context from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <Context>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="home" element={<Home/>}> 
          <Route path=":matriPath" element={<Detail/>} /> </Route>
        <Route path="login" element={<Login/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Context>
  </React.StrictMode>
);
