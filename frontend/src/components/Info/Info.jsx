import React from "react";
import "./Info.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import des icônes

const Info = () => {
  return (
    <div className="Images">
      <div className="ImageRight">
        <h1>Vous avez quelque chose à vendre?</h1>
        <button>publier une annonce</button>
        <img src={assets.image3} alt="" className="img1"></img>
      </div>
      <div className="derection">
        <div className="ImgLeft">
          <h1>connecter</h1>
          <button>
            <FontAwesomeIcon icon={faArrowRight} /> Cliquez ici
          </button>
          <img src={assets.img5} alt="" />
        </div>
        <div className="ImgButtom">
          <img src={assets.img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
