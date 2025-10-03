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
  const [showFilters, setShowFilters] = useState(false);

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

  // Design spécial pour la catégorie "fiches" - Version mobile-first moderne
  if (category === 'fiches') {
    return (
      <div className="FiltreAvance">
        {/* Header Mobile pour Fiches */}
        <div className="mobile-header">
          <div className="mobile-header-content">
            <h1 className="mobile-title">
              <span className="mobile-title-icon">📚</span>
              Fiches & Documents Scolaires
            </h1>
          </div>
          <div className="mobile-search">
            <input 
              type="text" 
              placeholder="Rechercher des fiches..." 
              defaultValue={searchQuery || ''}
            />
            <span className="mobile-search-icon">🔍</span>
          </div>
        </div>

        {/* Filtres spécialisés pour Fiches */}
        <div className="mobile-filters">
          <div className="mobile-filters-header">
            <h2 className="mobile-filters-title">Filtres Fiches</h2>
            <button 
              className="mobile-filters-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Masquer' : 'Afficher'}
            </button>
          </div>
          
          <div className={`mobile-filters-content ${showFilters ? 'active' : ''}`}>
            <div className="mobile-filter-group">
              <label className="mobile-filter-label">Niveau scolaire</label>
              <select className="mobile-filter-select">
                <option value="">Tous les niveaux</option>
                <option value="maternelle">Maternelle</option>
                <option value="primaire">Primaire</option>
                <option value="college">Collège</option>
                <option value="lycee">Lycée</option>
              </select>
            </div>

            <div className="mobile-filter-group">
              <label className="mobile-filter-label">Type de document</label>
              <select className="mobile-filter-select">
                <option value="">Tous les types</option>
                <option value="manuel">Manuels</option>
                <option value="exercice">Exercices</option>
                <option value="cours">Fiches de cours</option>
                <option value="evaluation">Évaluations</option>
              </select>
            </div>

            <div className="mobile-price-range">
              <input 
                type="number" 
                placeholder="Min" 
                className="mobile-price-input"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange({...filters, minPrice: e.target.value})}
              />
              <span className="mobile-price-separator">-</span>
              <input 
                type="number" 
                placeholder="Max" 
                className="mobile-price-input"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange({...filters, maxPrice: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Contenu Principal pour Fiches */}
        <div className="mobile-content">
          {/* Statistiques spéciales Fiches */}
          <div className="mobile-stats">
            <div className="mobile-stat-item">
              <span className="mobile-stat-number">{filteredItems.filter(item => item.category === 'fiches').length}</span>
              <span className="mobile-stat-label">Fiches disponibles</span>
            </div>
            <div className="mobile-stat-item">
              <span className="mobile-stat-number">5+</span>
              <span className="mobile-stat-label">Niveaux scolaires</span>
            </div>
            <div className="mobile-stat-item">
              <span className="mobile-stat-number">100%</span>
              <span className="mobile-stat-label">Qualité garantie</span>
            </div>
          </div>

          {/* Carrousel Fiches */}
          {featuredItems.length > 0 && (
            <div className="mobile-carousel">
              <div className="mobile-carousel-header">
                <h2 className="mobile-carousel-title">Fiches en vedette</h2>
                <div className="mobile-carousel-dots">
                  {featuredItems.map((_, index) => (
                    <span
                      key={index}
                      className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mobile-carousel-content">
                {featuredItems.map((item, index) => (
                  <div
                    key={index}
                    className={`mobile-carousel-item ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grille de Fiches */}
          <div className="mobile-products">
            <div className="mobile-products-header">
              <h2 className="mobile-products-title">Nos Fiches & Documents</h2>
              <select className="mobile-sort">
                <option>Trier par popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Plus récents</option>
              </select>
            </div>

            {filteredItems.filter(item => item.category === 'fiches').length === 0 ? (
              <div className="mobile-empty">
                <div className="mobile-empty-icon">📚</div>
                <h3 className="mobile-empty-title">Aucune fiche trouvée</h3>
                <p className="mobile-empty-description">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
                <button className="mobile-empty-btn">Réinitialiser les filtres</button>
              </div>
            ) : (
              <div className="mobile-products-grid">
                {filteredItems
                  .filter(item => item.category === 'fiches')
                  .map((item, index) => (
                    <div key={item._id || index} className="mobile-product-card">
                      <div className="mobile-product-image">
                        <img 
                          src={Array.isArray(item.image) ? item.image[0] : item.image} 
                          alt={item.name}
                        />
                        <div className="mobile-product-badge">FICHE</div>
                        <div className="mobile-product-price">{item.price} DT</div>
                      </div>
                      
                      <div className="mobile-product-content">
                        <h3 className="mobile-product-title">{item.name}</h3>
                        <p className="mobile-product-description">
                          {item.descripiton || "Fiche pédagogique de qualité pour l'apprentissage"}
                        </p>
                        
                        <div className="mobile-product-meta">
                          <span className="mobile-product-tag">Primaire</span>
                          <span className="mobile-product-tag">Français</span>
                        </div>
                        
                        <div className="mobile-product-footer">
                          <span className="mobile-product-price-main">{item.price} DT</span>
                          <button className="mobile-product-btn">Voir détails</button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* CTA Section pour Fiches */}
          <div className="mobile-cta">
            <div className="mobile-cta-content">
              <h2>Vous avez des fiches à vendre ?</h2>
              <p>Partagez vos documents pédagogiques avec la communauté étudiante</p>
              <button className="mobile-cta-button">Publier une fiche</button>
            </div>
          </div>
        </div>

        {/* Bouton flottant */}
        <button className="mobile-floating-btn">
          ➕
        </button>

        <Footer />
      </div>
    );
  }

  // Design mobile-first moderne pour toutes les catégories
  return (
    <div className="FiltreAvance">
      {/* Header Mobile */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <h1 className="mobile-title">
            <span className="mobile-title-icon">🔍</span>
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Recherche'}
          </h1>
        </div>
        <div className="mobile-search">
          <input 
            type="text" 
            placeholder="Rechercher des produits..." 
            defaultValue={searchQuery || ''}
          />
          <span className="mobile-search-icon">🔍</span>
        </div>
      </div>

      {/* Filtres Mobile */}
      <div className="mobile-filters">
        <div className="mobile-filters-header">
          <h2 className="mobile-filters-title">Filtres</h2>
          <button 
            className="mobile-filters-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Masquer' : 'Afficher'}
          </button>
        </div>
        
        <div className={`mobile-filters-content ${showFilters ? 'active' : ''}`}>
          <div className="mobile-filter-group">
            <label className="mobile-filter-label">Catégorie</label>
            <select 
              className="mobile-filter-select"
              value={filters.category}
              onChange={(e) => handleFilterChange({...filters, category: e.target.value})}
            >
              <option value="">Toutes les catégories</option>
              <option value="fiches">Fiches</option>
              <option value="Vêtements">Vêtements</option>
              <option value="Informatique et Multimedias">Informatique</option>
              <option value="music">Musique</option>
              <option value="Carte IoT">IoT</option>
              <option value="projets">Projets</option>
            </select>
          </div>

          <div className="mobile-filter-group">
            <label className="mobile-filter-label">État</label>
            <select className="mobile-filter-select">
              <option value="">Tous les états</option>
              <option value="new">Neuf</option>
              <option value="used">Occasion</option>
            </select>
          </div>

          <div className="mobile-price-range">
            <input 
              type="number" 
              placeholder="Min" 
              className="mobile-price-input"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange({...filters, minPrice: e.target.value})}
            />
            <span className="mobile-price-separator">-</span>
            <input 
              type="number" 
              placeholder="Max" 
              className="mobile-price-input"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange({...filters, maxPrice: e.target.value})}
            />
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="mobile-content">
        {/* Statistiques */}
        <div className="mobile-stats">
          <div className="mobile-stat-item">
            <span className="mobile-stat-number">{filteredItems.length}</span>
            <span className="mobile-stat-label">Produits</span>
          </div>
          <div className="mobile-stat-item">
            <span className="mobile-stat-number">
              {filteredItems.length > 0 ? Math.round(filteredItems.reduce((acc, item) => acc + item.price, 0) / filteredItems.length) : 0}
            </span>
            <span className="mobile-stat-label">Prix moyen</span>
          </div>
          <div className="mobile-stat-item">
            <span className="mobile-stat-number">
              {filteredItems.filter(item => item.price < 50).length}
            </span>
            <span className="mobile-stat-label">Bon marché</span>
          </div>
        </div>

        {/* Carrousel */}
        {featuredItems.length > 0 && (
          <div className="mobile-carousel">
            <div className="mobile-carousel-header">
              <h2 className="mobile-carousel-title">À la une</h2>
              <div className="mobile-carousel-dots">
                {featuredItems.map((_, index) => (
                  <span
                    key={index}
                    className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mobile-carousel-content">
              {featuredItems.map((item, index) => (
                <div
                  key={index}
                  className={`mobile-carousel-item ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Produits */}
        <div className="mobile-products">
          <div className="mobile-products-header">
            <h2 className="mobile-products-title">
              {searchQuery 
                ? `Résultats pour "${searchQuery}"` 
                : `Annonces ${filters.category || 'Tous les produits'}`}
            </h2>
            <select className="mobile-sort">
              <option>Trier par popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Plus récents</option>
            </select>
          </div>

          {filteredItems.length === 0 ? (
            <div className="mobile-empty">
              <div className="mobile-empty-icon">😔</div>
              <h3 className="mobile-empty-title">Aucun produit trouvé</h3>
              <p className="mobile-empty-description">
                Essayez de modifier vos filtres ou votre recherche
              </p>
              <button className="mobile-empty-btn">Réinitialiser les filtres</button>
            </div>
          ) : (
            <div className="mobile-products-grid">
              {filteredItems.map((item, index) => (
                <div key={item._id || index} className="mobile-product-card">
                  <div className="mobile-product-image">
                    <img 
                      src={Array.isArray(item.image) ? item.image[0] : item.image} 
                      alt={item.name}
                    />
                    <div className="mobile-product-badge">{item.category}</div>
                    <div className="mobile-product-price">{item.price} DT</div>
                  </div>
                  
                  <div className="mobile-product-content">
                    <h3 className="mobile-product-title">{item.name}</h3>
                    <p className="mobile-product-description">
                      {item.descripiton || "Description non disponible"}
                    </p>
                    
                    <div className="mobile-product-meta">
                      <span className="mobile-product-tag">Qualité</span>
                      <span className="mobile-product-tag">Étudiant</span>
                    </div>
                    
                    <div className="mobile-product-footer">
                      <span className="mobile-product-price-main">{item.price} DT</span>
                      <button className="mobile-product-btn">Voir</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bouton flottant */}
      <button className="mobile-floating-btn">
        ➕
      </button>

      <Footer />
    </div>
  );
};

export default FiltreAvance;