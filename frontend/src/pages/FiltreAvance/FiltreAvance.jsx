import React, { useContext, useState } from "react";
import "./FiltreAvance.css";
import { assets } from "./../../assets/assets";
import { useParams } from "react-router-dom";
import Filtre from "../../components/Filtre/Filtre";
import { storeContext } from "../../context/StoreProviderContext";
import ExploreItemDisgn from "../../components/ExploreItem_Disgn/ExploreItem_Disgn";

const FiltreAvance = () => {
  const { category } = useParams();
  const { Category_Item } = useContext(storeContext);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
    subCategory: '',
    condition: {
      new: false,
      used: false
    }
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = (items) => {
    return items.filter(item => {
      // Filtre par catégorie principale
      if (category !== "all" && item.category !== category) {
        return false;
      }

      // Filtre par prix
      if (filters.minPrice && item.price < Number(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && item.price > Number(filters.maxPrice)) {
        return false;
      }

      // Filtre par sous-catégorie
      if (filters.subCategory && item.subCategory !== filters.subCategory) {
        return false;
      }

      // Filtre par condition
      if (filters.condition.new && !filters.condition.used && !item.isNew) {
        return false;
      }
      if (filters.condition.used && !filters.condition.new && item.isNew) {
        return false;
      }

      return true;
    });
  };

  const filteredItems = applyFilters(Category_Item);
  return (
    <div className="FiltreAvance">
      <div className="FiltreAvance_left">
        <Filtre onFilterChange={handleFilterChange} />
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
          <h2>Annonces {category} d'occasion</h2>
          <div className="FiltreAvance_buttom">
            {filteredItems.map((item, index) => (
              <ExploreItemDisgn
                key={index}
                id={index + 1}
                name={item.name}
                image={item.image}
                price={item.price}
                descripiton={item.descripiton}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltreAvance;