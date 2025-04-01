import React from 'react'
import { Link } from "react-router-dom";
import "./ExploreItem_Disgn.css"
const ExploreItem_Disgn = ({id,name,image,price}) => {
  return (

 
    <div className='ExploreItem_box'>
      <Link to={`/filtreavance/${name}`}>
      <div className="ExlopreItem_box_Img">
              <img src={image} alt="" />
        </div>
        <hr />
        <div className="ExlopreItem_box_Info">
            <div className="text">
              {name}
            </div>
            <div className="price">
              {price}
            </div>
        </div>
      </Link>
      
     
    </div>
    )
}

export default ExploreItem_Disgn
