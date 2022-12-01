import react, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext();

export const SearchProvider =({ reducer, initalState, children })=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue =()=>useContext(StateContext);