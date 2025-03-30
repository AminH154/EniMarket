import { storeContext } from '../../Context/StoreProviderContext ';
import './ExploreItem.css'
import React, { useContext } from 'react'

const ExploreItem = () => {
    const { Category_Item } = useContext(storeContext);
  return (
    <div className='ExploreItem'>
        <h1>Explorez les boutiques de la semaine</h1>
        <div className="ExploreItem_list">

        </div>
      
    </div>
  )
}

export default ExploreItem

