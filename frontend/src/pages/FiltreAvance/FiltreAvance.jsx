import React, { useContext, useState, useEffect } from "react";
import "./FiltreAvance.css";
import { assets } from "./../../assets/assets";
import { useParams, useSearchParams } from "react-router-dom";
import Filtre from "../../components/Filtre/Filtre";
import { storeContext } from "../../context/StoreProviderContext";
import ExploreItemDisgn from "../../components/ExploreItem_Disgn/ExploreItem_Disgn";
import Footer from "../../components/footer/Footer";

const FiltreAvance = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  const { Category_Item } = useContext(storeContext);

  const categories = [
    { id: 'fiches', name: 'Fiches', icon: assets.fiches },
    { id: 'vetements', name: 'Vêtements', icon: assets.vetements },
    { id: 'informatique', name: 'Informatique et Multimedias', icon: assets.informatique },
    { id: 'music', name: 'Music', icon: assets.music },
    { id: 'carteiot', name: 'Carte IoT', icon: assets.carteiot },
    { id: 'projets', name: 'Projets', icon: assets.projets }
  ];

  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: category || '',
    condition: {
      new: false,
      used: false
    }
  });

  // État pour le carrousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  // Sélectionner les 3 premiers éléments pour le carrousel
  const featuredItems = Category_Item.slice(0, 3).map(item => ({
    image: Array.isArray(item.image) ? item.image[0] : item.image,
    title: item.name,
    price: `${item.price} DH`
  }));

  // Animation automatique du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide(prev => (prev + 1) % featuredItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredItems.length]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = (items) => {
    return items.filter(item => {
      // Filtre par recherche dans le nom et la description
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const description = item.descripiton?.toLowerCase() || '';
        const name = item.name?.toLowerCase() || '';
        
        if (!description.includes(searchLower) && !name.includes(searchLower)) {
          return false;
        }
      }

      // Filtre par catégorie principale
      if (filters.category && filters.category !== "all" && 
          item.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }

      // Filtre par prix
      if (filters.minPrice && item.price < Number(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && item.price > Number(filters.maxPrice)) {
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
        <Filtre 
          onFilterChange={handleFilterChange} 
          categories={categories}
          initialCategory={category}
        />
      </div>
      <div className="FiltreAvance_right">
        <div className="FiltreAvance_featured">
          <h1>À la une</h1>
          <div className="FiltreAvance_cards">
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className={`FiltreAvance_card ${
                  index === currentSlide 
                    ? 'active' 
                    : index === (currentSlide - 1 + featuredItems.length) % featuredItems.length 
                    ? 'previous' 
                    : ''
                }`}
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="carousel-dots">
            {featuredItems.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentSlide ? 'next' : 'prev');
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>
        </div>

        <div className="buttom">
          <h2>
            {searchQuery 
              ? `Résultats pour "${searchQuery}"` 
              : `Annonces ${filters.category || 'Tous les produits'}`}
          </h2>
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