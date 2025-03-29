import React from "react";
import "./ExploreCategory.css";
import { List_category } from "../../assets/assets";

const ExploreCategory = () => {
  return (
    <div className="ExploreCategory">
      <div className="ExploreCategory_text">Explorez toutes les catégories</div>
      <div className="ExploreCategory_list">
        {List_category.map((item, index) => (
          <div className="ExploreCategory_list_item" key={index}>
            <img
              src={item.category_image}
              alt={item.category_name || "Image non disponible"}
            />
            <p>{item.category_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;
