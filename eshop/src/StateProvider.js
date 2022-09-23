import { createContext, useContext, useReducer } from "react";

//prepare data layer
export const StateContext = createContext();

// wrap the app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
