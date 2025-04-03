import "./ProduitPage.css"
import React from 'react'
import { useLocation } from "react-router-dom";
const ProduitPage = () => {
    const location = useLocation(); 
  const { id, name, image, price } = location.state || {}; 

  return (
    <div className="ProduitPage">
      <h1>{name}</h1>
      <div className="ProduitPage_images">
        {Array.isArray(image) ? (
          image.map((img, index) => (
            <img key={index} src={img} alt={`${name} ${index + 1}`} />
          ))
        ) : (
          <img src={image} alt={name} />
        )}
      </div>
      <p>Prix : {price} DT</p>
    </div>
  );
};


export default ProduitPage
