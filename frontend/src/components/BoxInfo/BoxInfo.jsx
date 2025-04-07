import "./BoxInfo.css";
import React from 'react'
import {assets } from "../../assets/assets"
const BoxInfo = () => {
  return (
    <div className="boxContainer">
      <div className="header">
        <div className="avatar">
          <p>A</p>
        </div>
        <div className="UserInfo">
          <p>Anime Bouallegui</p>
          <div className="stats">
          <span>⭐ 5</span>
            
          </div>
        </div>
        <button className="arrowButton"> click </button>
      </div>
      <button className="buyButton">Acheter</button>
      <button className="offerButton">Faire une offre</button>
      <button className="contactButton">Contacter</button>
      <div className="paymentSection">
        <span>🔒 Paiement sécurisé</span>
        <div className="paymentMethods">
          <Image src={assets.cb} alt="CB" width={30} height={20} />
          <Image src={assets.visa} alt="Visa" width={30} height={20} />
          <Image src={assets.mastercard} alt="Mastercard" width={30} height={20} />
        </div>
      </div>
      
      

    </div>
  )
}

export default BoxInfo
