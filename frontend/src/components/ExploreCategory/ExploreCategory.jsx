import React from "react";
import "./ExploreCategory.css";
import { List_category } from "../../assets/assets";
import { Link } from "react-router-dom";

const ExploreCategory = () => {
  return (
    <div className="ExploreCategory">
      <div className="ExploreCategory_text">Explorez toutes les catégories</div>
      <div className="ExploreCategory_list">
        {List_category.map((item, index) => (
          <div className="ExploreCategory_list_item" key={index}>
            <Link to={`/filtreavance/${item.category_name}`}>
              <img
                src={item.category_image}
                alt={item.category_name || "Image non disponible"}
              />
              <p>{item.category_name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;