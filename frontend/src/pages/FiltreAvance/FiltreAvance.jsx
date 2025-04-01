import React from "react";
import "./FiltreAvance.css";
import { useParams } from "react-router-dom";

const FiltreAvance = () => {
  const { category } = useParams(); // Extract category from URL

  return (
    <div className="FiltreAvance">
      <h1>Filtre Avancé</h1>
      {category ? (
        <p>Selected Category: {category}</p>
      ) : (
        <p>No category selected</p>
      )}
    </div>
  );
};

export default FiltreAvance;