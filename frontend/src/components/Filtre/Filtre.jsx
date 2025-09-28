import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import "./Filtre.css"

const Filtre = ({ onFilterChange, initialCategory }) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: initialCategory || '',
    subCategory: '',
    condition: {
      new: false,
      used: false
    }
  });

  useEffect(() => {
    if (initialCategory) {
      setFilters(prev => ({
        ...prev,
        category: initialCategory
      }));
      onFilterChange({
        ...filters,
        category: initialCategory
      });
    }
  }, [initialCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      condition: {
        ...prev.condition,
        [name]: checked
      }
    }));
    onFilterChange({
      ...filters,
      condition: {
        ...filters.condition,
        [name]: checked
      }
    });
  };

  const handleReset = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      category: '',
      subCategory: '',
      condition: {
        new: false,
        used: false
      }
    });
    onFilterChange({
      minPrice: '',
      maxPrice: '',
      category: '',
      subCategory: '',
      condition: {
        new: false,
        used: false
      }
    });
  };

  return (
    <div className="hader_left">
      <div className="fitre_header">
        <div className="fitre_header_left">
          <h4>Filtre avancés</h4>
        </div>
        <div className="fitre_header_right" onClick={handleReset}>
          <img src={assets.reset} alt="reset" />
          <span>Réinitialiser</span>
        </div>
      </div>
      
      <div className="price-range">
        <input 
          type="number" 
          name="minPrice" 
          placeholder="Minimum" 
          value={filters.minPrice}
          onChange={handleInputChange}
        />
        <input 
          type="number" 
          name="maxPrice" 
          placeholder="Maximum"
          value={filters.maxPrice}
          onChange={handleInputChange}
        />
      </div>

      <select 
        name="category" 
        value={filters.category}
        onChange={handleInputChange}
      >
        <option value="">Catégorie</option>
        <option value="fiches">Fiches</option>
        <option value="Vêtements">Vêtements</option>
        <option value="Informatique et Multimedias">Informatique et Multimedias</option>
        <option value="music">Music</option>
        <option value="Carte IoT">Carte IoT</option>
        <option value="projets">Projets</option>
      </select>

      <div className="filter-footer">
        <label>État de produit :</label>
        <label>
          <input 
            type="checkbox" 
            name="new"
            checked={filters.condition.new}
            onChange={handleCheckboxChange}
          />
          Neuf
        </label>
        <label>
          <input 
            type="checkbox" 
            name="used"
            checked={filters.condition.used}
            onChange={handleCheckboxChange}
          />
          Occasion
        </label>
      </div>

    </div>
  )
}

export default Filtre