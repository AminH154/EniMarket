import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { assets } from "../../assets/assets";
import {useState} from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);
    const [checked, setChecked] = useState({
        privacy: false,
        offers: false
    });
    const [error, setError] = useState({
        email: "",
        password: "",
        privacy: "",
        offers: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Validation email
        if (!formData.email) {
            newErrors.email = "Email est requis";
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Veuillez entrer un email valide";
            isValid = false;
        }

        // Validation mot de passe
        if (!formData.password) {
            newErrors.password = "Mot de passe est requis";
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
            isValid = false;
        }

        // Validation des cases à cocher en mode signup
        if (!login) {
            if (!checked.privacy) {
                newErrors.privacy = "Veuillez accepter la politique de confidentialité";
                isValid = false;
            }
            if (!checked.offers) {
                newErrors.offers = "Veuillez accepter les offres exclusives";
                isValid = false;
            }
        }

        setError(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Effacer l'erreur du champ modifié
        setError(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleCheckbox = (e) => {
        const {name, checked} = e.target;
        setChecked(prev => ({
            ...prev,
            [name]: checked
        }));
        // Effacer l'erreur de la case à cocher modifiée
        setError(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate("/");
        }
    };

    return (
        <div className="auth-page">
            {/* Background avec animations */}
            <div className="auth-background">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                </div>
            </div>

            <div className="auth-container">
                {/* Section gauche - Formulaire */}
                <div className="auth-form-section">
                    <div className="auth-form-container">
                        {/* Header avec logo */}
                        <div className="auth-header">
                            <div className="auth-logo">
                                <span className="logo-icon">🛒</span>
                                <h1>UniMarket</h1>
                            </div>
                            <p className="auth-subtitle">
                                {login ? "Bienvenue de retour !" : "Rejoignez notre communauté"}
                            </p>
                        </div>

                        {/* Formulaire */}
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    <span className="label-icon">📧</span>
                                    Adresse email
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    placeholder="votre@email.com" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className={`form-input ${error.email ? "error" : ""}`}
                                />
                                {error.email && <span className="error-message">{error.email}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    <span className="label-icon">🔒</span>
                                    Mot de passe
                                </label>
                                <div className="password-input-container">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        id="password"
                                        name="password" 
                                        placeholder="Votre mot de passe" 
                                        value={formData.password} 
                                        onChange={handleChange}
                                        className={`form-input ${error.password ? "error" : ""}`}
                                    />
                                    <button 
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </button>
                                </div>
                                {error.password && <span className="error-message">{error.password}</span>}
                            </div>

                            {/* Options supplémentaires pour Login */}
                            {login && (
                                <div className="form-options">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        Se souvenir de moi
                                    </label>
                                    <Link to="/forgot-password" className="forgot-link">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>
                            )}

                            {/* Cases à cocher pour Sign Up */}
                            {!login && (
                                <div className="signup-checkboxes">
                                    <div className={`checkbox-group ${error.privacy ? "error" : ""}`}>
                                        <label className="checkbox-container">
                                            <input 
                                                type="checkbox" 
                                                id="privacy"
                                                name="privacy"
                                                checked={checked.privacy}
                                                onChange={handleCheckbox}
                                            />
                                            <span className="checkmark"></span>
                                            J'accepte la <Link to="/privacy" className="link">politique de confidentialité</Link>
                                        </label>
                                        {error.privacy && <span className="error-message">{error.privacy}</span>}
                                    </div>
                                    
                                    <div className={`checkbox-group ${error.offers ? "error" : ""}`}>
                                        <label className="checkbox-container">
                                            <input 
                                                type="checkbox" 
                                                id="offers"
                                                name="offers"
                                                checked={checked.offers}
                                                onChange={handleCheckbox}
                                            />
                                            <span className="checkmark"></span>
                                            Je souhaite recevoir les offres exclusives
                                        </label>
                                        {error.offers && <span className="error-message">{error.offers}</span>}
                                    </div>
                                </div>
                            )}

                            {/* Bouton de soumission */}
                            <button type="submit" className="auth-submit-btn">
                                <span className="btn-text">
                                    {login ? "Se connecter" : "Créer un compte"}
                                </span>
                                <span className="btn-icon">
                                    {login ? "🚀" : "✨"}
                                </span>
                            </button>

                            {/* Divider */}
                            <div className="divider">
                                <span>ou continuer avec</span>
                            </div>

                            {/* Boutons sociaux */}
                            <div className="social-buttons">
                                <button type="button" className="social-btn google-btn">
                                    <img src={assets.logoGo} alt="Google" />
                                    Google
                                </button>
                                <button type="button" className="social-btn facebook-btn">
                                    <img src={assets.facebook} alt="Facebook" />
                                    Facebook
                                </button>
                                <button type="button" className="social-btn github-btn">
                                    <img src={assets.github} alt="GitHub" />
                                    GitHub
                                </button>
                            </div>

                            {/* Lien de basculement */}
                            <div className="auth-switch">
                                <p>
                                    {login ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                                    <button 
                                        type="button"
                                        className="switch-link"
                                        onClick={() => {
                                            setLogin(!login);
                                            setError({
                                                email: "",
                                                password: "",
                                                privacy: "",
                                                offers: ""
                                            });
                                            setFormData({
                                                email: "",
                                                password: ""
                                            });
                                            setChecked({
                                                privacy: false,
                                                offers: false
                                            });
                                        }}
                                    >
                                        {login ? "Créer un compte" : "Se connecter"}
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Section droite - Image et informations */}
                <div className="auth-info-section">
                    <div className="auth-info-content">
                        <div className="info-card">
                            <div className="info-icon">
                                {login ? "🎓" : "🌟"}
                            </div>
                            <h2>
                                {login ? "Bienvenue de retour !" : "Rejoignez UniMarket"}
                            </h2>
                            <p>
                                {login 
                                    ? "Accédez à votre espace personnel et découvrez de nouvelles opportunités d'achat et de vente."
                                    : "Rejoignez notre communauté d'étudiants et découvrez une nouvelle façon d'acheter et vendre vos articles."
                                }
                            </p>
                            
                            <div className="features-list">
                                <div className="feature-item">
                                    <span className="feature-icon">🛍️</span>
                                    <span>Achetez et vendez facilement</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🔒</span>
                                    <span>Transactions sécurisées</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">👥</span>
                                    <span>Communauté étudiante</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">📱</span>
                                    <span>Application mobile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;