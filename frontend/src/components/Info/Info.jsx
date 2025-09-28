import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="Images">
      <div className="ImageRight">
        <Link to="/publier">
          <h1>Vous avez quelque chose à vendre?</h1>
          <button>publier une annonce</button>
          <img src={assets.image3} alt="Image de publication" className="img1" />
        </Link>
      </div>
      <div className="derection">
        <div className="ImgLeft">
          <Link to="/login">
            <h1>connecter</h1>
            <button>
              <FontAwesomeIcon icon={faArrowRight} /> Cliquez
            </button>
          </Link>
          <img src={assets.img5} alt="Image de connexion" />
        </div>
        <div className="ImgButtom">
          <img src={assets.img6} alt="Image supplémentaire" />
        </div>
      </div>
    </div>
  );
};

export default Info;
