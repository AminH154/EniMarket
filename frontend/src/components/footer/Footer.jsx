import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">UniMarket </h1>
          <p>
          UniMarket est une plateforme web et mobile
           dédiée aux étudiants qui souhaitent acheter et vendre 
           des articles entre eux en toute simplicité 
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Raccourcis</h2>
          <ul>
            <li>Publier une annonce</li>
            <li>Filtres avancés</li>
            <li>Rechercher sur uni market </li>
            <li>Bons plans</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+216-29-002-853</li>
            <li>+216-97-93-45-45</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="fotter-copyright ">
        Copyright 2025 © Uni Market.com -All right Reserved.{" "}
      </p>
    </div>
  );
}

export default Footer;
