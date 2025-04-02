import React from 'react'
import { assets } from '../../assets/assets'
import "./Filtre.css"


const Filtre = () => {
  return (
        <div className="hader_left">
              <div className="fitre_header">
                <div className="fitre_header_left">
                <h4>Fitre avancés</h4>
                </div>
                <div className="fitre_header_right">
                   <img src={assets.reset} alt="" />
                   <i className="fas fa-sync-alt">Réinitailiser</i>
                </div>
                
             
              </div>
              <div className="price-range">
                <input type="number" name="Minimum" id="" placeholder="Minimum" />
                <input type="number" name="Maximum" id=""  placeholder="Maximum"/>
              </div>
              <select>
                <option value="catégory">Catégory</option>
              </select>
              <select>
                <option value="sous catégory">Sous Catégory</option>
              </select>
             
              <div class="filter-footer">
                <label>État de produit :</label>
                <label ><input type="checkbox" />Neuf</label>
                <label ><input type="checkbox" />Occasion</label>
              </div>
              <div className='Filtrebuttom'>
                  <img src={assets.filtreAvance} alt="Filter Icon" />
                <p>Filtre</p>
              </div>
            
                
        </div>
  )
}

export default Filtre
