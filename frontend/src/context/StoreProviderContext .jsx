import React, { createContext } from 'react'



export const storeContext = createContext(null);



function StoreProviderContext (props) {

    contextValue={}



    return (
        <storeContext.Provider value={contextValue}>
          {props.children}
        </storeContext.Provider>
      );
}

export default StoreProviderContext 
