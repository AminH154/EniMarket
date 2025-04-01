import React from "react";
import "./FiltreAvance.css";
import { useParams } from "react-router-dom";
import Filtre from "../../components/Filtre/Filtre"; // Adjust the path as needed

const FiltreAvance = () => {
  const { category } = useParams(); // Extract category from URL

  return (
    <div className="FiltreAvance">
     <div className="FiltreAvance_left">
     <Filtre/>
     </div>
     <div className="FiltreAvance_right">

     </div>
    </div>
  );
};

export default FiltreAvance;