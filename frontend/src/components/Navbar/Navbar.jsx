import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from './../../assets/assets';
import Wave from './../Wave/Wave';

const Navbar = ({ login, setLogin }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearch, setRecentSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]); // État pour les suggestions
  const navigate = useNavigate();
  const suggestionsRef = useRef(null); // Référence pour la liste des suggestions

  // Liste simulée de produits
  const products = [
    "Téléphone Samsung Galaxy",
    "Ordinateur portable Dell",
    "Casque Bluetooth Sony",
    "Télévision LG 4K",
    "Tablette Apple iPad",
    "Montre connectée Fitbit",
    "Appareil photo Canon",
    "Enceinte JBL",
    "Clavier mécanique Logitech",
    "Souris gaming Razer",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setRecentSearch(searchQuery);
      navigate(`/filtreavance/search?q=${encodeURIComponent(searchQuery)}`);
      setSuggestions([]); // Vider les suggestions après la recherche
      setSearchQuery(""); // Réinitialiser la barre de recherche
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filtrer les produits en fonction de la saisie
    if (query.trim()) {
      const filteredSuggestions = products.filter((product) =>
        product.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    navigate(`/filtreavance/search?q=${encodeURIComponent(suggestion)}`);
  };

  // Cacher les suggestions et réinitialiser la barre de recherche lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]); // Cacher les suggestions
        setSearchQuery(""); // Réinitialiser la barre de recherche
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar_right">
        <Link to={"/"} onClick={() => setSearchQuery("")}>
          <h1 className="logo">UniMarket </h1>
        </Link>
      </div>

      <div className="navbar_center">
        <div className="navbar_centre_box" ref={suggestionsRef}>
          <div className="box_item-right">
            <img
              src={assets.search}
              alt=""
              className="search"
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="box_item-centre">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Recherche sur UniMarket"
                className="main-search"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </form>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="suggestion-item"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <p>votre recherche récente: {recentSearch || "pas de recherches récentes"}</p>
          </div>
        </div>
      </div>
      <div className="navbar_left">
        <div className="box-item">
          <Link to={"/publier"} onClick={() => setSearchQuery("")}>
            <img src={assets.add_icon_white} alt="" />
            <p>publier une annonce</p>
          </Link>
        </div>
        <hr />
        <div className="deconnecte">
          <Link to={"/login"} onClick={() => setSearchQuery("")}>
            <img src={assets.utilisateur} alt="" />
            <p>Se connecter</p>
          </Link>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Navbar;