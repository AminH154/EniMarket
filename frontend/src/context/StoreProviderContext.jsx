import React, { createContext, useReducer } from 'react'
import { List_category } from '../assets/assets';
import { Category_Item as initialItems } from '../assets/assets'

export const storeContext = createContext(null);

// Définir les types d'actions
const ADD_ANNONCE = 'ADD_ANNONCE';

// Reducer pour gérer les états
const storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_ANNONCE:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

// État initial
const initialState = {
  items: initialItems,
  categories: List_category
};

const StoreProviderContext = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Actions
  const addAnnonce = (newAnnonce) => {
    dispatch({
      type: ADD_ANNONCE,
      payload: newAnnonce
    });
  };

  const contextValue = {
    List_category: state.categories,
    Category_Item: state.items,
    addAnnonce
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreProviderContext; 

