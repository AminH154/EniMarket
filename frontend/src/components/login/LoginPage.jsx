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
        <div className="login-page">
            <div className="login-left">
                <form onSubmit={handleSubmit} className={login ? "login-form" : "signup-form"}>
                    <h1>{login ? "Login" : "Sign Up"}</h1>
                    <div className="login-left-input">
                        <div className="EmailInput">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                placeholder="Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className={error.email ? "error-input" : ""}
                            />
                            {error.email && <p className="ErreurMessage">{error.email}</p>}
                        </div>
                        
                        <div className="passwordInput">
                            <label htmlFor="password">Password</label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                id="password"
                                name="password" 
                                placeholder="password" 
                                value={formData.password} 
                                onChange={handleChange}
                                className={error.password ? "error-input" : ""}
                            />
                            {showPassword ? 
                                <img src={assets.hide} alt="hide" onClick={() => setShowPassword(!showPassword)} className="eye" height={20} width={20} /> : 
                                <img src={assets.eye} alt="eye" onClick={() => setShowPassword(!showPassword)} className="hide" height={20} width={20} />
                            }
                            {error.password && <p className="ErreurMessage">{error.password}</p>}
                        </div>
                    </div>

                    <hr />
                    <div className="login-assets">
                        <img src={assets.logoGo} alt="google" />
                        <img src={assets.facebook} alt="facebook" />
                        <img src={assets.github} alt="github" />
                    </div>

                    {!login && (
                        <div className="login-checkbox">
                            <div className={`a ${error.privacy ? "error-checkbox" : ""}`}>
                                <input 
                                    type="checkbox" 
                                    id="privacy"
                                    name="privacy"
                                    checked={checked.privacy}
                                    onChange={handleCheckbox}
                                />
                                <label htmlFor="privacy">
                                    j'accepte la <span>politique de confidentialité & cookies et les termes et conditions</span>
                                </label>
                                {error.privacy && <p className="ErreurMessage">{error.privacy}</p>}
                            </div>
                            <div className={`b ${error.offers ? "error-checkbox" : ""}`}>
                                <input 
                                    type="checkbox" 
                                    id="offers"
                                    name="offers"
                                    checked={checked.offers}
                                    onChange={handleCheckbox}
                                />
                                <label htmlFor="offers">
                                    j'accepte de recevoir des offres exclusives et les dernières nouvelles de la marque
                                </label>
                                {error.offers && <p className="ErreurMessage">{error.offers}</p>}
                            </div>
                        </div>
                    )}

                    <button 
                        type="submit"
                    >
                        {login ? "Login" : "Sign Up"}
                    </button>

                    <div className="signup-link">
                        <p>
                            {login ? "Vous n'avez pas de compte ? " : "Vous avez déjà un compte ? "}
                            <span onClick={() => {
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
                            }}>
                                {login ? "Sign Up" : "Login"}
                            </span>
                        </p>
                    </div>
                </form>
            </div>
            <div className={`login-right ${login ? "login-mode" : "signup-mode"}`}>
                <div className="login-right-box">
                    <div className="login-right-box-img">
                        <img src={assets.boutique} alt="login" />
                        <div className="login-right-box-info">
                            <h1>{login ? "WELCOME BACK" : "JOIN US"}</h1>
                            <p>UniMarket est une plateforme web et mobile dediée aux etudiants</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;