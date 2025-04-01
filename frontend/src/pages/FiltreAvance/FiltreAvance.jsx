import React from "react";
import "./FiltreAvance.css";
import { assets } from "./../../assets/assets";
import { useParams } from "react-router-dom";
import Filtre from "../../components/Filtre/Filtre"; // Adjust the path as needed

const FiltreAvance = () => {
  const { category } = useParams(); // Extract category from URL

  return (
    <div className="FiltreAvance">
      <div className="FiltreAvance_left">
        <Filtre />
      </div>
      <div className="FiltreAvance_right">
        <div className="FiltreAvance_featured">
          <h1>À la une</h1>
          <div className="FiltreAvance_cards">
            {/* Example cards */}
            <div className="FiltreAvance_card">
              <img src="https://via.placeholder.com/150" alt="Card 1" />
              <p>A vendre un Local Commercial de 58.09m²</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltreAvance;
