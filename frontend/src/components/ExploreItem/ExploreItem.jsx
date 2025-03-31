import { storeContext } from "../../context/StoreProviderContext";
import "./ExploreItem.css";
import React, { useContext } from "react";
import ExploreItemDisgn from "../ExploreItem_Disgn/ExploreItem_Disgn";
const ExploreItem = () => {
  const { Category_Item } = useContext(storeContext);
  return (
    <div className="ExploreItem">
      <h1>Explorez les boutiques de la semaine</h1>
      <div className="ExploreItem_list">
        {Category_Item.map((item, index) => (
          <ExploreItemDisgn
            key={index}
            id={index + 1}
            name={item.name}
            image={item.image}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreItem;
