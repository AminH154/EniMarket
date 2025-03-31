import React from 'react'
import "./ExploreItem_Disgn.css"
const ExploreItem_Disgn = ({id,name,image,price,category}) => {
  return (
    <div className='ExploreItem_box'>
        <div className="ExlopreItem_box_Img">
          <img src={image} alt="" />

        </div>
        <div className="ExlopreItem_box_Info">
            <div className="text">
              {name}
            </div>
            <div className="price">
              {price}
            </div>
        </div>

      
    </div>
  )
}

export default ExploreItem_Disgn
