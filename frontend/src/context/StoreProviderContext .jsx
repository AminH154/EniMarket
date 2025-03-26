import React, { createContext } from 'react'



export const storeContext = createContext(null);



function StoreProviderContext (props) {

    const contextValue = {
        // Add your desired context values here
        exampleKey: "exampleValue"
    };



    return (
        <storeContext.Provider value={contextValue}>
          {props.children}
        </storeContext.Provider>
      );
}

export default StoreProviderContext 
