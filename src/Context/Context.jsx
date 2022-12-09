import axios from "axios";
import React from "react";
import { reducer } from "../Reducer/reducer";
import { createContext, useContext, useState, useEffect, useReducer } from "react";

const GlobalStates = createContext()
const initialState = "light"

const Context = ({children}) => {

    const [data, setData] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        axios("https://dhodonto.ctdprojetos.com.br/dentista").then(res => setData(res.data)); 
    }, [])

    return (
        <GlobalStates.Provider
            value={{data, state, dispatch}}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}