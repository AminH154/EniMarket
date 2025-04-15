import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./Filtre.css"

const Filtre = ({ onFilterChange }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilterChange({ ...filters, [name]: value });
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
          <i className="fas fa-sync-alt">Réinitialiser</i>
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
        <option value="electronics">Électronique</option>
        <option value="clothing">Vêtements</option>
        <option value="books">Livres</option>
        <option value="furniture">Meubles</option>
      </select>

      <select 
        name="subCategory" 
        value={filters.subCategory}
        onChange={handleInputChange}
      >
        <option value="">Sous Catégorie</option>
        <option value="phones">Téléphones</option>
        <option value="laptops">Ordinateurs</option>
        <option value="accessories">Accessoires</option>
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

      <div className='Filtrebuttom'>
        <img src={assets.filtreAvance} alt="Filter Icon" />
        <p>Filtre</p>
      </div>
    </div>
  )
}

export default Filtre