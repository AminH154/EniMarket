import "./ProduitPage.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ProduitPage = () => {
  const location = useLocation();
  const { id, name, image, price, descripiton } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(0);

  // Vérifiez si `image` est un tableau, sinon utilisez un tableau vide par défaut
  const images = Array.isArray(image) ? image : [];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="gallery_Left">
        <div className="image-wrapper">
          {/* Flèche gauche */}
          <button className="arrow left-arrow" onClick={prevImage}>
            &#8592;
          </button>

          {/* Image Principale */}
          {images.length > 0 ? (
            <motion.img
              key={selectedImage}
              src={images[selectedImage]}
              alt={name}
              className="main-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            (<img src={image} alt={name} className="main-image" />)
          )}

          {/* Flèche droite */}
          <button className="arrow right-arrow" onClick={nextImage}>
            &#8594;
          </button>

          {/* Miniatures */}
          <div className="thumbnails">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                className={`thumbnail ${index === selectedImage ? "active" : ""}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Informations sur le produit */}
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-id">ID: {id}</p>
        <p className="product-description">{descripiton}</p>
        <p className="product-price">Prix: {price} €</p>
      </div>
    </div>
  );
};

export default ProduitPage;