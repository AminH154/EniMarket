import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { assets } from "../../assets/assets";
import {useState} from "react";

const LoginPage = () => {
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
    const [ShowPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const valideEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handlechange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error[name]) {
            setError(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleCheckbox = (e) => {
        const {name, checked: isChecked} = e.target;
        setChecked(prev => ({
            ...prev,
            [name]: isChecked
        }));
        if (error[name]) {
            setError(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation email
        if (!formData.email) {
            newErrors.email = "Email est requis";
        } else if (!valideEmail(formData.email)) {
            newErrors.email = "Veuillez entrer un email valide";
        }

        // Validation mot de passe
        if (!formData.password) {
            newErrors.password = "Mot de passe est requis";
        } else if (formData.password.length < 8) {
            newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
        }

        // Validation cases à cocher
        if (!checked.privacy) {
            newErrors.privacy = "Veuillez accepter la politique de confidentialité";
        }
        if (!checked.offers) {
            newErrors.offers = "Veuillez accepter les offres exclusives";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Formulaire valide", formData);
            // Ajoutez ici votre logique de connexion
        }
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="login-left-input">
                        <div className="EmailInput">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                placeholder="Email" 
                                value={formData.email} 
                                onChange={handlechange} 
                            />
                            {error.email && <p className="ErreurMessage">{error.email}</p>}
                        </div>
                        
                        <div className="passwordInput">
                            <label htmlFor="password">Password</label>
                            <input 
                                type={ShowPassword ? "text" : "password"} 
                                id="password"
                                name="password" 
                                placeholder="password" 
                                value={formData.password} 
                                onChange={handlechange} 
                            />
                            {ShowPassword ? 
                                <img src={assets.hide} alt="hide" onClick={() => setShowPassword(!ShowPassword)} className="eye" height={20} width={20} /> : 
                                <img src={assets.eye} alt="eye" onClick={() => setShowPassword(!ShowPassword)} className="hide" height={20} width={20} />
                            }
                            {error.password && <p className="ErreurMessage">{error.password}</p>}
                        </div>
                    </div>

                    <hr />
                    <div className="login-assets">
                        <img src={assets.logoGo} alt="google" />
                        <img src={assets.facebook} alt="apple" />
                        <img src={assets.github} alt="github" />
                    </div>

                    <div className="login-checkbox">
                        <div className="a">
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
                        </div>
                        <div className="b">
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

                    <button type="submit">Login</button>
                    <div className="signup-link">
                        <p>Vous n'avez pas de compte ? <Link to="/signup" className="animate-link">Sign Up</Link></p>
                    </div>
                </form>
            </div>

            <div className="login-right">
                <div className="login-right-box">
                    <div className="login-right-box-img">
                        <img src={assets.boutique} alt="login" />
                        <div className="login-right-box-info">
                            <h1>WELCOME BACK</h1>
                            <p>UniMarket est une plateforme web et mobile dediée aux etudiants</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
