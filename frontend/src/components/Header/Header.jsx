import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="hader_left">
        <div className="filtre_contaier">
          <div className="fitre_header">
            <h4>Fitre avancés</h4>
            <button className="reset-btn">
              <i className="fas fa-sync-alt">Réinitailiser</i>
            </button>
          </div>
          <label> prix (DT)</label>
          <div className="price-range">
            <input type="number" name="Minimum" id="" placeholder="Minimum" />
            <input type="number" name="Maximum" id=""  placeholder="Maximum"/>
          </div>
          <select>
            <option value="catégory">Catégory</option>
          </select>
          <select>
            <option value="sous catégory">Catégory</option>
          </select>
          <label>État de produit :</label>
          <div class="filter-footer">
            <button class="filter-btn"><i class="fas fa-filter"></i> FILTRER</button>
            <button class="notify-btn"><i class="fas fa-bell"></i></button>
        </div>
        </div>
      </div>
      <div className="header_right">
        <img src={assets.header} alt="" className="header_img" />
 
      </div>
    </div>
  );
};

export default Header;
