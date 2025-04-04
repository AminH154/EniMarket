import React from "react";
import { Link } from "react-router-dom";
import "./ExploreItem_Disgn.css";
const ExploreItem_Disgn = ({ id, name, image, price,descripiton,date }) => {


  return (
    <div className="ExploreItem_box">
      <Link to={{
        pathname:"produitpage",
      }}
        state={{id,name,image,price,descripiton,date}}
     >
        <div className="ExlopreItem_box_Img">
          <img src={Array.isArray(image)?image[0]:image} alt="" />
        </div>
        <hr />
        <div className="ExlopreItem_box_Info">
          <div className="text">{name}</div>
          <div className="price">{price} DT</div>
        </div>
      </Link>
    </div>
  );
};

export default ExploreItem_Disgn;
