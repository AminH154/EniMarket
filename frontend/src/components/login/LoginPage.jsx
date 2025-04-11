import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { assets } from "../../assets/assets";
import {useState} from "react";

const LoginPage = () => {
    const [ShowPassword, setShowPassword] = useState(true);
    return (
        <div className="login-page">
            <div className="login-left">
                <h1>Login</h1>
                <div className="login-left-input">
                    <label htmlFor=''>Email</label>
                    <input type="text" placeholder="Email" />
                    <div className="passwordInput">
                        {ShowPassword ? <img src={assets.hide} alt="hide" onClick={() => setShowPassword(!ShowPassword)} className="eye" height={20} width={20} /> : <img src={assets.eye} alt="eye" onClick={() => setShowPassword(!ShowPassword)} className="hide" height={20} width={20} />}
                        <input type={ShowPassword ? "text" : "password"} placeholder="password" />
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
                        <input type="checkbox" />
                        <label htmlFor="">j'accepte la <span>politique de confidentialité & cookies et les termes et conditions</span></label>
                    </div>
                    <div className="b">
                        <input type="checkbox" />
                        <label htmlFor="">j'accepte de recevoir des offres exclusives et les derniéres nouvelles de la marque</label>
                    </div>
                </div>
                <button>Login</button>
                <div className="signup-link">
                    <p>Vous n'avez pas de compte ? <Link to="/signup" className="animate-link">Sign Up</Link></p>
                </div>
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
    )
}

export default LoginPage;