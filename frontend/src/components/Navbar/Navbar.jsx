import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from './../../assets/assets';
import Wave from './../Wave/Wave';

const Navbar = ({login, setLogin}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearch, setRecentSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setRecentSearch(searchQuery);
      navigate(`/filtreavance/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return(
    <div className="navbar">
      <div className="navbar_right">
        <Link to={"/"}> 
          <h1 className="logo">UniMarket </h1>
        </Link>
      </div>
    
      <div className="navbar_center">
        <div className="navbar_centre_box">
          <div className="box_item-right">
            <img src={assets.search} alt="" className="search" onClick={handleSearch} style={{cursor: 'pointer'}} />
          </div>
          <div className="box_item-centre">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Recherche sur UniMarket" 
                className="main-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <p>votre recherche récente: {recentSearch || "pas de recherches récentes"}</p>
          </div>
        </div>
      </div>
      <div className="navbar_left">
        <div className="box-item">
          <Link to={"/publier"}>
            <img src={assets.add_icon_white} alt="" />
            <p>publier une annonce</p>
          </Link>
        </div>
        <hr />
        <div className="deconnecte">
          <Link to={"/login"}>
            <img src={assets.utilisateur} alt="" />
            <p>Se connecter</p>
          </Link>
        </div>
      </div>
      <Wave/>
    </div>
  );
};

export default Navbar;