import React, { createContext } from 'react'
import { List_category } from '../assets/assets';
import {Category_Item} from '../assets/assets'


export const storeContext = createContext(null);

const StoreProviderContext  = (props) => {

  const contextValue = {
      List_category,
      Category_Item,
  };



  return (
      <storeContext.Provider value={contextValue}>
        {props.children}
      </storeContext.Provider>
    );
}

export default StoreProviderContext 

