import React, { useContext } from "react";
import "./FiltreAvance.css";
import { assets } from "./../../assets/assets";
import { useParams } from "react-router-dom";
import Filtre from "../../components/Filtre/Filtre"; 
import { storeContext } from "../../context/StoreProviderContext";
import ExploreItemDisgn from "../../components/ExploreItem_Disgn/ExploreItem_Disgn"


const FiltreAvance = () => {
  const { category } = useParams(); // Extract category from URL
  const  {Category_Item} =useContext(storeContext)
  const filteredFoodList = category === 'all' ? Category_Item : Category_Item.filter(item => item.category === category);
  return (
    <div className="FiltreAvance">
      <div className="FiltreAvance_left">
        <Filtre />
      </div>
      <div className="FiltreAvance_right">
        <div className="FiltreAvance_featured">
          <h1>À la une</h1>
          <div className="FiltreAvance_cards">
           
            <div className="FiltreAvance_card">
              <img src={assets.ps3} alt="Card 1" />
              <p>A vendre un Local Commercial de 58.09m²</p>
            </div>
            <div className="FiltreAvance_card">
              <img src={assets.ps3} alt="Card 1" />
              <p>A vendre un Local Commercial de 58.09m²</p>
            </div>
            <div className="FiltreAvance_card">
              <img src={assets.ps3} alt="Card 1" />
              <p>A vendre un Local Commercial de 58.09m²</p>
            </div>
           
          </div>
        </div>
        <div className="buttom">
          <h2>Filtre par {category}</h2>
          <div className="FiltreAvance_buttom">
            {filteredFoodList.map((item, index) => (
              <ExploreItemDisgn
                key={index}
                id={index + 1}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
      </div>
        </div>

      </div>
    </div>
  );
};

export default FiltreAvance;
