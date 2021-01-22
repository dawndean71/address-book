// Set up data layer
// We need this to track the contactCard

import React, { createContext, useContext, useReducer } from "react";
// Goal: create global variables that can be passed around in a React application instead of
// passing props from granparent to parent to child and so on...

// 1. THIS IS THE DATA LAYER variable
export const StateContext = createContext();

// 2. BUILD A PROVIDER to wrap our entire app in this provider and give it access to the data layer above.
//  StateProvider takes 3 props:
// reducer: a switch statement that switches between diff actions (add to basket, remove from basket)
// intialState: how the data layer looks in the beginning
// children: this is the app itself. Because in index.js. the <App/> is a child of the <StateProvider>
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use the StateProvider inside of a component
export const useStateValue = () => useContext(StateContext);
