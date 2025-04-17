import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Publier.css";
import { assets } from "../../../assets/assets";
import { storeContext } from "../../../context/StoreProviderContext";

const Publier = () => {
  const navigate = useNavigate();
  const { Category_Item, setCategory_Item } = useContext(storeContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    condition: "neuf",
    location: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer un nouvel article
    const newItem = {
      _id: String(Category_Item.length + 1),
      name: formData.title,
      descripiton: formData.description,
      price: Number(formData.price),
      category: formData.category,
      image: formData.images.length > 0 
        ? formData.images.map(img => URL.createObjectURL(img))
        : assets.default_product, // Utilisez une image par défaut de vos assets
      date: new Date().toLocaleDateString(),
      isNew: formData.condition === "neuf"
    };

    // Ajouter le nouvel article à la liste
    setCategory_Item(prevItems => [newItem, ...prevItems]);

    // Rediriger vers la page d'accueil
    navigate('/');
  };

  return (
    <div className="publier-container">
      <div className="publier-header">
        <h1>Publier une annonce</h1>
        <p>
          Remplissez les détails de votre annonce pour la rendre visible aux
          acheteurs
        </p>
      </div>

      <form onSubmit={handleSubmit} className="publier-form">
        <div className="form-section">
          <h2>Informations de base</h2>
          <div className="form-group">
            <label>Titre de l'annonce *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: iPhone 13 Pro Max 256GB"
              required
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez votre article en détail..."
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Prix *</label>
              <div className="price-input">
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0"
                  required
                />
                <span>€</span>
              </div>
            </div>

            <div className="form-group">
              <label>Catégorie *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                
                <option value="">Sélectionnez une catégorie</option>
                <option value="fiches">Fiches</option>
                <option value="vetements">Vêtements</option>
                <option value="informatique">Informatique et Multimedias</option>
                <option value="music">Music</option>
                <option value="carteiot">Carte IoT</option>
                <option value="projets">Projets</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>État *</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="neuf">Neuf</option>
                <option value="comme_neuf">Comme neuf</option>
                <option value="bon_etat">Bon état</option>
                <option value="etat_satisfaisant">État satisfaisant</option>
              </select>
            </div>

            <div className="form-group">
              <label>Localisation *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ville, département"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Photos</h2>
          <div className="image-upload-container">
            <div className="image-upload-box">
              <input
                type="file"
                id="image-upload"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <label htmlFor="image-upload" className="upload-button">
                <img src={assets.upload_icon} alt="Upload" />
                <span>Ajouter des photos</span>
                <p>Jusqu'à 10 photos</p>
              </label>
            </div>
            <div className="image-preview">
              {formData.images.map((image, index) => (
                <div key={index} className="preview-item">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                  />
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        images: prev.images.filter((_, i) => i !== index),
                      }));
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/")}
          >
            Annuler
          </button>
          <button type="submit" className="submit-button">
            Publier l'annonce
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publier;
