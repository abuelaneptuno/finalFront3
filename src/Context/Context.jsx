import { useMemo, createContext, useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import { reducerTemas } from "../Reducer/reducerTemas";
import { reducerFavoritos } from "../Reducer/reducerFavoritos";
  
  const initialState = { color: "light", data: [] };
  export const GlobalStates = createContext();

  const Context = ({ children }) => {
  const [dentistas, setDentistas] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => setDentistas(res.data));
  }, []);

  function initFav(initialValue) {
    return localStorage.getItem("favoritos")
      ? JSON.parse(localStorage.getItem("favoritos"))
      : initialValue;
  }

  const [stateFav, dispatchFav] = useReducer(
    reducerFavoritos,
    initialState.data,
    initFav
  );

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(stateFav));
  }, [stateFav]);

  const [favoritos, setFavoritos] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos"));
    setFavoritos(data);
  }, [stateFav]);

  const [stateTema, dispatchTema] = useReducer(reducerTemas, initialState);

  const variablesContext = {dentistas, setDentistas, stateTema, dispatchTema, stateFav, dispatchFav, favoritos, setFavoritos};

  return (
    <GlobalStates.Provider value={{ variablesContext }}>
      {children}
    </GlobalStates.Provider>
  );
};

export default Context;

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}