import React from 'react'
import './Info.css'
import { assets } from '../../assets/assets'
const Info = () => {
  return (
    <div className='Images'>
        <div className="ImageRight">
            <button className='button_right'>
                <i>Seconnecte</i>
            </button>
            <img src={assets.annonce} alt="" />

        </div>
        <div className="ImgLeft">
        <button className='button_left'>
                <i>publier une annoce</i>
            </button>
            <img src={assets.connect} alt="" />

        </div>
      
    </div>
  )
}

export default Info
