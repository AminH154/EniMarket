import React from 'react'
import { Link } from "react-router-dom";
import "./ExploreItem_Disgn.css"
const ExploreItem_Disgn = ({id,name,image,price}) => {
  return (

 
    <div className='ExploreItem_box'>
      <div className="ExlopreItem_box_Img">
              <img src={image} alt="" />
        </div>
        <hr />
        <div className="ExlopreItem_box_Info">
            <div className="text">
              {name}
            </div>
            <div className="price">
              {price} DT
            </div>
        </div>
       
      
     
    </div>
    )
}

export default ExploreItem_Disgn
