import React, { createContext } from 'react'
import { List_category } from '../assets/assets';



export const storeContext = createContext(null);



function StoreProviderContext (props) {

    const contextValue = {
        List_category
    };



    return (
        <storeContext.Provider value={contextValue}>
          {props.children}
        </storeContext.Provider>
      );
}

export default StoreProviderContext 
