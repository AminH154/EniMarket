import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from './../../assets/assets';
import Wave from './../Wave/Wave'; // Adjust the path based on the actual location of the Wave component

const navbar = ({loggin, setLoggin}) => {
  return(
    <div className="navbar">
 
      <div className="navbar_right">
        <Link to={"/"}> 
        <h1 className="logo">UniMarket </h1>
        </Link>
      </div>
    
      <div className="navbar_center">
        <div className="navbar_centre_box">
          <div className="box_item-right">
            
            <img src={assets.search} alt="" className="search" />
      
        
          
          </div>
          <div className="box_item-centre">
               <input type="text" placeholder="Recherche sur UniMarket" class="main-search"/>
            <p>votre récente reacherche:pasde recherche recentes</p>
          </div>
          
        </div>
      </div>
      <div className="navbar_left">
        <div className="box-item">
          <img src={assets.add_icon_white} alt="" />
          <p>publier une annonce</p>
        </div>
        <hr />
          <div className="deconnecte" >
            <Link to={"/login"}>
              <img src={assets.utilisateur} alt="" />
              <p>Se connecter</p>
            </Link>
         
        </div>
      </div>
      <Wave/>
    </div>

  );};

export default navbar;